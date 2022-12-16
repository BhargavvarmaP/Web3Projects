import React from 'react';
import {Box,Stack,TextField,Typography,Button} from "@mui/material";
import {ethers} from "ethers";
import { GlobalContext } from '../App'; 
const Profile = () => {
  const data =  React.useContext(GlobalContext);
   const [Payeedata,setPayeedata] = React.useState({PayeeName:"",PayeeAddress:"",PayeeAmount:""});
   const {PayeeName,PayeeAddress,PayeeAmount} = Payeedata;
   const [RemovePayeedata,setRemovePayeedata] = React.useState("");
   const provider = data.provider ;
   const contract = data.contract;
   const signer = data.contract; 
   console.log(contract);
   const onChangeHandler = e=>{
    console.log(Payeedata);
    setPayeedata({...Payeedata,[e.target.name]:e.target.value});
   } 
   const onChangeHandler2 = e=>{
    setRemovePayeedata(e.target.value);
   }
  
   const Addpayee = async (e)=>{
       e.preventDefault();
       await contract.AddPayee(PayeeName,PayeeAmount,PayeeAddress,{gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000});
   }
   const Removepayee = async (e)=>{
    e.preventDefault();
    await contract.RemovePayee(RemovePayeedata,{gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000});
} 

  return (
    
    <React.Fragment>
        <Stack alignItems="center" direction="row" marginTop="60px" >
    <Box  boxShadow={4} sx={{width:350,height:400,border:"2px solid black",borderRadius:"20px",margin:"auto"}}>
        <form id="Addpayee" onSubmit={Addpayee}>
        <Stack alignItems="center" spacing={4} direction="column" sx={{margin:"60px 20px"}}>
          <TextField required size="small" sx={{width:"200px"}} onChange={onChangeHandler} name="PayeeName" value={PayeeName} label="Payee Name" placeholder="Enter Payee Name"/>
          <TextField required size="small" sx={{width:"200px"}} onChange={onChangeHandler} name="PayeeAddress" value={PayeeAddress} label="Address" placeholder="Enter Address"/>
          <TextField required size="small" sx={{width:"200px"}} onChange={onChangeHandler} name="PayeeAmount" value={PayeeAmount} label="Amount" placeholder="Enter Amount"/>
          <Button type="submit" variant="contained" sx={{background:"black",color:"white",fontWeight:700,fontFamily:"monospace"}}>Add Payee</Button>
          </Stack>
        </form>
        </Box>
        <Stack alignItems="center" direction="column" spacing={9} sx={{marginRight:"160px"}} >
        <Box >
          <Typography variant="h4" sx={{fontWeight:200,fontFamily:"monospace"}}>
           Hi User, <br/>
           Here you can modify the Payees.
          </Typography>
          </Box>
        <Box  boxShadow={4} sx={{width:550,height:150,border:"2px solid black",borderRadius:"20px"}}>
        <Stack sx={{margin:"60px 20px"}}>
        <form id="RemovePayee" onSubmit={Removepayee}>
         <TextField required size="small" sx={{width:"200px"}} onChange={onChangeHandler2} name="RemovePayeedata" value={RemovePayeedata} label="Address" placeholder="Enter Address"/>
         <Button type="submit" variant="contained" sx={{marginLeft:"30px",background:"black",color:"white",fontWeight:700,fontFamily:"monospace"}}>Remove Payee</Button>
        </form>
        </Stack>
        </Box>
        </Stack>
        </Stack>
        
    </React.Fragment>
  
  )
}

export default Profile;