import React, { useContext } from 'react';
import {Box,Stack,Button,TextareaAutosize,TextField} from "@mui/material";
import {ethers} from "ethers";
import App from '../App';

const Create = () => {
    const [Image,setImage] = React.useState("");
    const [Name,setName] = React.useState("");
    const [Price,setPrice] = React.useState(null);
    const [URI,setURI] = React.useState("");
    const [Description,setDescription] = React.useState("");
    const data = useContext({});
    let nft= value.nft;
    let marketplace = value.marketplace;
    console.log(nft);
    console.log(marketplace);   
   const UploadIPFS = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if(typeof file!= "undefined"){
        try {
            const ipfs = await window.Ipfs.create();
        let result = await ipfs.add(file);
        console.log(result);
        await ipfs.stop();
            setImage("https://ipfs.io/ipfs/"+result.path);
        }catch(error){
            console.log("Upload Error :",error);
        }
    }
   }
    const CreateNFT = async () =>{
        if(!Name || !Image || !Price || !Description) return
        try {
            const ipfs = await window.Ipfs.create();
            const result = await ipfs.add(JSON.stringify({Image,Name,Description,URI}));
            console.log(result);
            await ipfs.stop();
            minter(result);
        } catch(error) {
            console.log("Upload Error :",error);
        }
    }
    const minter = async (result) => {
        const uri = "https://ipfs.io/ipfs/"+result.path;
        await(await nft.mint(uri)).wait();
        const id = await nft.tokenCount();
        await(await nft.setApprovalForAll(marketplace.address,true)).wait();
        const listingprice = ethers.utils.parseEther(Price.toString());
        await(await marketplace.makeItem(nft.address,id,listingprice)).wait();
    }
    return (
        <data.Consumer>
    <Box boxShadow={6} sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(10px)",border:"1px solid rgba(243, 171, 171, 0.3)",borderRadius:"16px",margin:"auto",marginTop:"80px",display:"flex",alignItems:"center",justifyContent:"center",width:600,height:600}}>
    <Stack spacing={5} direction="column">
      <TextField size="small" onChange={(e)=>setName(e.target.value)} sx={{backgroundColor:"white",borderRadius:"16px"}} label="Name" placeholder="Enter NFT Name" required />
      <TextField size="small" onChange={(e)=>setURI(e.target.value)} sx={{backgroundColor:"white",borderRadius:"16px"}} label="URI" placeholder="Enter Image URI" />
      <TextField type="number" size="small" onChange={(e)=>setPrice(e.target.value)} sx={{backgroundColor:"white",borderRadius:"16px"}} label="Price" placeholder="Enter Price in Ether" />
      <TextareaAutosize minRows={7} sx={{backgroundColor:"white"}} onChange={(e)=>setDescription(e.target.value)} label="Description" placeholder="Enter Image Attributes" required />
      <TextField type="file" onChange={UploadIPFS}/>
      <Button variant="contained" onClick={CreateNFT} sx={{border:"2px solid white",borderRadius:"16px",color:"white",backgroundColor:"transparent",fontWeight:600}}>Create</Button>
    </Stack>
    </Box>
    </data.Consumer>
  )
}

export default Create;