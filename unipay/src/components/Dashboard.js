import React from 'react';
import {Stack,Box,Button,Typography,Table,TableBody,TableCell,Paper,TableContainer,TableHead,TableRow} from "@mui/material";
import {constants, ethers} from "ethers";
import { GlobalContext } from '../App'; 


const Dashboard = () => {
  const data =  React.useContext(GlobalContext);
  const [address,setaddress] = React.useState("");
  const [balance,setbalance] = React.useState("");
   const [payees,setpayees]  = React.useState(""); 
   const [totalpay,settotalpay] = React.useState("");
   const [amount,setamount] = React.useState("");
   const [txhistory,settxhistory] = React.useState({});
   const provider = data.provider ;
   const contract = data.contract;
   const signer = data.contract; 
  React.useEffect(() => {
    getInfo();
  }, [address,balance,payees,totalpay]);
  function createData(Name, Amount, Address, Balance, Index) {
    return { Name,Amount,Address,Balance,Index };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ];
  async function getInfo(){
    const bal = await ethers.utils.formatEther(await contract.Balance());
    console.log(bal);
   setbalance(bal);
    await contract.on("ReceivedToContractLog",async (from,amount)=>{
     amount=await ethers.utils.formatEther(amount);
      let info = {
       from:from,
       amount:amount
     };
      console.log(info);
      settxhistory(info);
    });
    }
  async function FundMe() {
   
  } 
  async function TransferPay() {
    await contract.TransferPay({gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000});
  }
  
  async function WithdrawPay(event) {
    const _amount = prompt("Enter Withdraw amount");
    
      setamount(ethers.utils.formatEther(_amount));
    
    console.log(amount);
    await contract.WithdrawPayer({amount},{gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000});
  }
  return (
    <Stack alignItems="center" spacing={10} direction="column" marginTop="60px" >
      <Stack alignItems="center" spacing={6} direction="row">
      <Box   sx={{width:800,height:350}}>
        <Typography variant="h4" sx={{fontWeight:200,fontFamily:"monospace",marginTop:"80px"}}>
         User, The Amount can be transferred or withdrawn from here..
        </Typography>
        <Stack  spacing={8} direction="row" sx={{marginTop:"70px",marginLeft:"200px"}}>
        <Button variant="contained" onClick={FundMe} sx={{background:"black",color:"white",fontWeight:700,fontFamily:"monospace"}}>Fund Me</Button>
      <Button onClick={TransferPay} variant="contained" sx={{marginLeft:"30px",background:"black",color:"white",fontWeight:700,fontFamily:"monospace"}}>Transfer Pay</Button>
      <Button onClick={WithdrawPay} variant="contained" sx={{marginLeft:"30px",background:"black",color:"white",fontWeight:700,fontFamily:"monospace"}}>Withdraw Pay</Button>
      </Stack>
      </Box>
      <Box  sx={{width:400,height:350}}>
      <Stack alignItems="center" spacing={4} direction="column">
      <Typography variant="h5" sx={{fontWeight:200,fontFamily:"monospace",marginTop:"60px"}}>
         User Info
        </Typography>
        <Typography variant="h6" sx={{fontWeight:200,fontFamily:"monospace"}}>
         Address : {address} <br />
         Balance : {balance} Ether <br />
         Payees  : {payees} <br />
         TotalPay: {totalpay}
        </Typography>
        </Stack>
      </Box>
      
      </Stack>
    <Box  boxShadow={4} sx={{width:1200,height:250}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight:800,fontFamily:"monospace"}}>Name</TableCell>
            <TableCell align="right" sx={{fontWeight:800,fontFamily:"monospace"}}>Amount</TableCell>
            <TableCell align="right" sx={{fontWeight:800,fontFamily:"monospace"}}>Address</TableCell>
            <TableCell align="right" sx={{fontWeight:800,fontFamily:"monospace"}}>Balance</TableCell>
            <TableCell align="right" sx={{fontWeight:800,fontFamily:"monospace"}}>Index</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      </TableContainer>
      </Box>
      </Stack>
  )
}

export default Dashboard;