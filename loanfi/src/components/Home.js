import React from 'react'
import {Box,Stack,TextField,Typography,Button} from "@mui/material";
const Home = () => {
  return (
    <Box class="container" boxShadow={8} sx={{margin:"auto",height:"100%",width:"75%",backgroundColor:"rgba( 255, 255, 255, 0.35 )",backdropFilter:"blur( 11px )",borderRadius:"20px"}}>
     <Stack direction="column"  marginTop="40px" alignItems="center" spacing={8} >     
        <Typography  variant="h4"  sx={{color:"white",fontWeight:"600",fontFamily:"monospace",marginTop:"80px",marginLeft:"40px",display:"flex",alignItems:"center",width:"600px",height:"100px"}}>
          User , LoanFi Welcomes you
        </Typography>
        <Stack direction="row" spacing={8}>
        <Button  variant="contained" size="small" sx={{width:"200px"}}>As a Lender</Button>
        <Button  variant="contained" size="small" sx={{width:"200px"}}>As a Borrower</Button>
        </Stack>
    </Stack>
    </Box>

  )
}

export default Home;