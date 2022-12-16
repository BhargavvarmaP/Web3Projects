import React from 'react';
import {ethers} from "ethers";
import {Typography,Grid,Box} from "@mui/material";

export default function MyPurchases({ marketplace, nft, account }) {
    const [loading, setLoading] = React.useState(true)
  const [purchases, setPurchases] = React.useState([])
  const loadPurchasedItems = async () => {
    // Fetch purchased items from marketplace by quering Offered events with the buyer set as the user
    const filter =  marketplace.filters.Bought(null,null,null,null,null,account)
    const results = await marketplace.queryFilter(filter)
    //Fetch metadata of each nft and add that to listedItem object.
    const purchases = await Promise.all(results.map(async (i) => {
      // fetch arguments from each result
      i = i.args
      // get uri url from nft contract
      const uri = await nft.tokenURI(i.tokenId)
      // use uri to fetch the nft metadata stored on ipfs 
      const response = await fetch(uri)
      const metadata = await response.json()
      // get total price of item (item price + fee)
      const totalPrice = await marketplace.getTotalPrice(i.itemId)
      // define listed item object
      let purchasedItem = {
        totalPrice,
        price: i.price,
        itemId: i.itemId,
        name: metadata.name,
        description: metadata.description,
        image: metadata.image
      }
      return purchasedItem;
    }))
    setLoading(false)
    setPurchases(purchases)
  }
  React.useEffect(() => {loadPurchasedItems();});
  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
         <Typography variant="h4" sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(10px)",color:"white",width:"400px",margin:"auto"}}>Loading...</Typography>
    </main>
  )
  return (
<Box>
         {purchases.length > 0 ?
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4, md: 2}}>
         {purchases.map((items, i) => (
            <Grid xs={6}>
            <Grid.Img src={items.image}/>
            <Grid.Body>
            <Grid.Title>{items.name}</Grid.Title>
            </Grid.Body>
            <Grid.Footer>{ethers.utils.formatEther(items.totalPrice)} ETH</Grid.Footer>
          </Grid>
             ))}
         </Grid>
         : (
            <main style={{ padding: "1rem 0" }}>
               <Typography variant="h4" sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(10px)",color:"white",width:"400px",margin:"auto"}}>No listed assets</Typography>
          </main>
         ) }
    </Box>
    );
         }
  