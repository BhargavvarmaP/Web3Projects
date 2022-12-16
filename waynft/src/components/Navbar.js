import React from 'react';
import {AppBar,Toolbar,Stack,Typography,Button} from "@mui/material";
const Navbar = ({Connect,account}) => {
    return (
    <AppBar position="static" sx={{backgroundColor:"rgba(243, 171, 171, 0.2)",backdropFilter:"blur(5px)",border:"1px solid rgba(243, 171, 171, 0.3)"}}>
        <Toolbar>
                <Typography variant="h5" sx={{display:"flex",justifyContent:"flex-start",fontWeight:600,fontFamily:"cursive",color:"white"}}>
                  wayNFT
                </Typography>
                <Stack direction="row" sx={{display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"80px"}}>
                 <Button href="/" variant="text" sx={{fontSize:"15px",fontWeight:600,fontFamily:"Arial",color:"white"}}>Home</Button>
                 <Button href="/Create" sx={{fontSize:"15px",fontWeight:600,fontFamily:"Arial",color:"white"}}>Create</Button>
                 <Button href="/Explore" sx={{fontSize:"15px",fontWeight:600,fontFamily:"Arial",color:"white"}}>Explore</Button>
                 <Button sx={{fontSize:"15px",fontWeight:600,fontFamily:"Arial",color:"white"}}>Profile</Button>
                 <Button href="/MyListedItems" sx={{fontSize:"15px",fontWeight:600,fontFamily:"Arial",color:"white"}}>MyListedItems</Button>
                 <Button href="/MyPurchases" sx={{fontSize:"15px",fontWeight:600,fontFamily:"Arial",color:"white"}}>MyPurchases</Button>
                </Stack>
                <Button variant="contained" onClick={Connect} sx={{fontWeight:600,backgroundColor:"transparent",border:"2px solid white",borderRadius:"14px"}}>{account}</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;