import React from 'react'
import {Box,Stack,TextField,Typography,Button} from "@mui/material";
const Lender = () => {
  return (
    <React.Fragment>
        <Box class="container" boxShadow={8} sx={{margin:"auto",height:"100%",width:"75%",backgroundColor:"rgba( 255, 255, 255, 0.35 )",backdropFilter:"blur( 11px )",borderRadius:"20px"}}>
      <Stack direction="column"  marginTop="40px" alignItems="center" spacing={8} >     
        <Typography  variant="h4"  sx={{color:"white",fontWeight:"600",fontFamily:"monospace",marginTop:"80px",marginLeft:"40px",display:"flex",alignItems:"center",width:"600px",height:"100px"}}>
          Hi User, You can Borrow Ether by filling up the form 
        </Typography>
        <Button  variant="contained" size="small" sx={{width:"200px"}}>PayLoan</Button>
        <Stack direction="row" spacing={10} >
        <Typography  variant="h4" sx={{marginTop:"30px",color:"white",fontFamily:"monospace",fontWeight:"600",width:"450px",height:"200px"}}>
            Available Tokens are :
        </Typography>
        <Stack direction="column" spacing={2}>
            <TextField label="Token Address" placeholder="Enter ERC20 Token Address" size='small' sx={{width:"200px",backgroundColor:"white"}}/>
            <TextField label="Collateral Amount" placeholder="Enter Collateral Amount" size='small' sx={{width:"200px",backgroundColor:"white"}}/>
            <TextField label="Loan Amount" placeholder="Enter Loan Amount" size='small' sx={{width:"200px",backgroundColor:"white"}}/>
            <TextField label="Payoff Amount" placeholder="Enter Payoff Amount" size='small' sx={{width:"200px",backgroundColor:"white"}}/>
            <TextField label="Loan Duration" placeholder="Enter Loan Duration in Days" size='small' sx={{width:"200px",backgroundColor:"white"}}/>
            <Button  variant="contained" size="small" sx={{width:"200px"}}>Request Loan</Button>
        </Stack>
        </Stack>
    </Stack>
</Box>
 </React.Fragment>
  )
}

export default Lender