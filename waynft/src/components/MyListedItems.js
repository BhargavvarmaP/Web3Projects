import React from 'react'
import {ethers} from "ethers";
import {Grid,Box,Typography} from "@mui/material";
function MySoldItems(Items) {
  return (
    <Box>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4, md: 2}}>
         {Items.map((items, i) => (
            <Grid xs={6}>
            <Grid.Img src={items.image}/>
            <Grid.Body>
            <Grid.Title>{items.name}</Grid.Title>
            </Grid.Body>
            <Grid.Footer>For {ethers.utils.formatEther(items.totalPrice)} ETH - Recieved {ethers.utils.formatEther(items.price)} ETH</Grid.Footer>
          </Grid>
             ))}
         </Grid>
         </Box>
  )
}

export default function MyListedItems({ marketplace, nft, account }) {
    const [loading, setLoading] = React.useState(true)
    const [listeditems, setListeditems] = React.useState([])
    const [solditems, setSolditems] = React.useState([])
    const loadListedItems = async () => {
      
      const itemCount = await marketplace.itemCount()
      let listeditems = [];
      let solditems = [];
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i)
        if (item.seller.toLowerCase()===account) {
          const uri = await nft.tokenURI(item.tokenId) 
          const response = await fetch(uri)
          const metadata = await response.json()
          const totalPrice = await marketplace.getTotalPrice(item.itemId)
          let items = {
            totalPrice,
            itemId: item.itemId,
            seller: item.seller,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image
          }
          listeditems.push(items);
          if (item.sold) {solditems.push(items);}
        }
      }
      setLoading(false);
      setListeditems(listeditems);
      setSolditems(solditems);
    }
  
    React.useEffect(() => { loadListedItems();});
    if (loading) return (
      <main style={{ padding: "1rem 0" }}>
        <Typography variant="h4" sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(10px)",color:"white",width:"400px",margin:"auto"}}>Loading...</Typography>
      </main>
    )
    return (
    <Box>
         {listeditems.length > 0 ?
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4, md: 2}}>
         {listeditems.map((items, i) => (
            <Grid xs={6}>
            <Grid.Img src={items.image}/>
            <Grid.Body>
            <Grid.Title>{items.name}</Grid.Title>
            </Grid.Body>
            <Grid.Footer>{ethers.utils.formatEther(items.totalPrice)} ETH</Grid.Footer>
          </Grid>
             ))}
              {solditems.length > 0 && MySoldItems(solditems)}
         </Grid>
         : (
            <main style={{ padding: "1rem 0" }}>
               <Typography variant="h4" sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(10px)",color:"white",width:"400px",margin:"auto"}}>No Listed Items</Typography>
          </main>
         ) }
    </Box>
    );
         }
  