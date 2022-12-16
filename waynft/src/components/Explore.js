import React from 'react'
import {Grid,Box,Button,Typography} from "@mui/material";
import {ethers} from "ethers";

const Explore = ({marketplace,nft}) => {
    const [loading, setLoading] = React.useState(true)
    const [items, setItems] = React.useState([])

    const loadMarketplaceItems = async () => {
      
      const itemCount = await marketplace.itemCount()
      let items = []
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i)
        if (!item.sold) {
          const uri = await nft.tokenURI(item.tokenId) 
          const response = await fetch(uri)
          const metadata = await response.json()
          const totalPrice = await marketplace.getTotalPrice(item.itemId)
          items.push({
            totalPrice,
            itemId: item.itemId,
            seller: item.seller,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image
          })
        }
      }
      setLoading(false);
      setItems(items);
    }
  
    const buyMarketItem = async (item) => {
      await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
      loadMarketplaceItems()
    }
  
    React.useEffect(() => { loadMarketplaceItems();});
    if (loading) return (
      <main style={{ padding: "1rem 0" }}>
        <Typography variant="h4" sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(10px)",color:"white",width:"400px",margin:"auto"}}>Loading...</Typography>
      </main>
    )
    return (
    <Box>
         {items.length > 0 ?
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4, md: 2}}>
         {items.map((item, idx) => (
            <Grid xs={6}>
            <Grid.Img src={item.image}/>
            <Grid.Body>
            <Grid.Title>{item.name}</Grid.Title>
            <Grid.Text>{item.description}</Grid.Text>
            </Grid.Body>
            <Grid.Footer>
            <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
                        Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                      </Button>
            </Grid.Footer>
          </Grid>
             ))}
         </Grid>
         : (
            <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
         ) }
    </Box>
    );
         }
  
export default Explore;