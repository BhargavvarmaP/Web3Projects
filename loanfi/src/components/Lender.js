import React from 'react'
import {Box,Stack,TextField,Typography,Button} from "@mui/material";
const Lender = () => {
  return (
    <React.Fragment>
        <Box class="container" boxShadow={8} sx={{margin:"auto",height:"100%",width:"75%",backgroundColor:"rgba( 255, 255, 255, 0.35 )",backdropFilter:"blur( 11px )",borderRadius:"20px"}}>
    <Stack direction="row"  marginTop="40px" alignItems="center" spacing={8} >     
        <Typography variant="h4"  sx={{color:"white",fontWeight:"600",fontFamily:"monospace",marginTop:"80px",marginLeft:"40px",display:"flex",alignItems:"center",width:"600px",height:"400px"}}>
          Hi User, You can do lending operations here with feature of Add/Remove ERC20 tokens 
        </Typography>
        <Stack direction="column" spacing={4}>
            <Box boxShadow={4} sx={{marginTop:"80px",height:"200px",width:"200px"}}></Box>
            <TextField label="Token Address" placeholder="Enter ERC20 Token Address" size='small' sx={{width:"200px",backgroundColor:"white"}}/>
            <Button  variant="contained" size="small" sx={{width:"200px"}}>Add Token</Button>
            <Button variant="contained" size="small" sx={{width:"200px"}}>Remove Token</Button>
        </Stack>
        </Stack>
        <Stack direction="row">
            <Typography variant="h3" boxShadow={4} sx={{marginTop:"100px",marginLeft:"100px",width:"800px",height:"400px"}}>

            </Typography>
        </Stack>
        <Stack direction="row">
        <Box sx={{marginTop:"60px",marginLeft:"100px"}}>
            <Stack direction="row" spacing={12}>
            <Button  variant="contained" size="small" sx={{width:"200px"}}>Lend Ether</Button>
            <Button  variant="contained" size="small" sx={{width:"200px"}}>Loan Status</Button>
            <Button  variant="contained" size="small" sx={{width:"200px"}}>Recovery</Button>
            </Stack>
        </Box>
        </Stack>
   </Box>
 </React.Fragment>
  )
}

export default Lender