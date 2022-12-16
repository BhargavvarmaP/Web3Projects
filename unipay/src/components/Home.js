import React from 'react'
import {Box,Stack,TextField,Typography,Button} from "@mui/material";
import {ethers} from "ethers";
import { GlobalContext } from '../App'; 
const Home = () => {
  const data =  React.useContext(GlobalContext);
  const provider = data.provider ;
   const contract = data.contract;
  async function ChangePayer() {
    let accounts= await provider.send("eth_requestAccounts",[]); 
    const address = accounts[0];
  await contract.RenouncePayer(address,{gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000});
  }
    return (
    <React.Fragment>
        
        <Box  sx={{width:1200,height:200,marginTop:"80px",marginLeft:"80px"}}>
        <Stack alignItems="center" direction="column" marginTop="20px" >
        <Typography  variant="h4" sx={{fontWeight:400,fontFamily:"monospace",margin:"auto"}}>
        To pay for a list of your contacts, <br/>use the lightweight payment channel UniPay.
        </Typography>
        <Button onClick={ChangePayer} variant="contained" sx={{background:"black",color:"white",fontWeight:700,fontFamily:"monospace",marginTop:"50px"}}>Get Started as Payer</Button>
        </Stack>
        </Box>
    </React.Fragment>
  )
}

export default Home