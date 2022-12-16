import React from 'react'
import {Box,AppBar,Toolbar,Typography,Button} from "@mui/material";
import {ethers} from "ethers";
import { GlobalStateContext } from '../App';

const NavBar = () => {
    const data =  React.useContext(GlobalStateContext);
    const provider = data.provider;
    const [Wallet,setWallet] = React.useState("Connect to Wallet");
    
    React.useEffect(() => {Connect();}, [Wallet]);
    
    async function Connect() {
      const accounts= await provider.send("eth_requestAccounts",[]);
      const account = accounts[0].slice(0,8)+"...."+accounts[0].slice(36,42);
      setWallet(account);        
    }

  return (
    <React.Fragment>
    <Box sx={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
    <AppBar boxshadow={4} position="static" sx={{background:"rgba( 255, 255, 255, 0.35 )",backdropFilter:"blur( 11px )",borderRadius:"25px",width:"75%"}}>
        <Toolbar>                      
         <Typography variant="h6" sx={{marginLeft:"40px",fontWeight: 700,fontFamily:"monospace"}}>
            LoanFi
         </Typography>
         <Button className="btn" onClick={Connect} variant="outlined" sx={{marginLeft:"auto",background:"transparent",color:"white",fontWeight:700,fontFamily:"monospace"}}>{Wallet}</Button>
        </Toolbar>
    </AppBar>
    </Box>
</React.Fragment>

  )
}

export default NavBar;