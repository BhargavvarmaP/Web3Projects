import "./nav.css";
import React, { useEffect } from 'react';
import {Box,AppBar,Toolbar,Typography,Button} from "@mui/material";
import {ethers} from "ethers";
import { GlobalContext } from '../App'; 
const Navbar = () => {
  const data =  React.useContext(GlobalContext);
  const provider = data.provider;
    const [Wallet,setWallet] = React.useState("Connect to Wallet");
    
    useEffect(() => {Connect();}, [Wallet]);
    
    async function Connect() {
      const accounts= await provider.send("eth_requestAccounts",[]);
      const account = accounts[0].slice(0,8)+"...."+accounts[0].slice(38,42);
      setWallet(account);        
    }

  return (
    <React.Fragment>
        <Box boxShadow={4}>
        <AppBar position="static" sx={{background:"black"}}>
            <Toolbar>
             <Typography variant="h6" sx={{fontWeight: 700,fontFamily:"monospace"}}>
                UniPay
             </Typography>
             <div className='nav-menu'>
                <ul>
                <li><Button href="/" sx={{color:"white",fontWeight:700,fontFamily:"monospace",fontSize:17}} >HOME</Button></li>
                <li><Button href="/Dashboard" sx={{color:"white",fontWeight:700,fontFamily:"monospace",fontSize:17}} >DASHBOARD</Button></li>
                <li><Button href="/Profile" sx={{color:"white",fontWeight:700,fontFamily:"monospace",fontSize:17}}>PROFILE</Button>
                </li>
                </ul>
                </div>
             <Button className="btn" onClick={Connect} variant="outlined" sx={{marginLeft:"auto",background:"black",color:"white",fontWeight:700,fontFamily:"monospace",border:"2px solid white"}}>{Wallet}</Button>
            </Toolbar>
        </AppBar>
        </Box>
    </React.Fragment>
  )
}

export default Navbar;