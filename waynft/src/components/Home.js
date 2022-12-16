import React from 'react';
import {Box,Stack,TextField,Button,Typography} from "@mui/material";
const Home = () => {
    const [formData,setformData] = React.useState("");
    const {Name,Address} = formData;

    function Submit() {
        console.log(Name);
      console.log(Address);
    }
    const onChangeHandler= (e) => {
        setformData({...formData,[e.target.name]:e.target.value});
    }

    return (
    <Box sx={{marginTop:"80px"}}>
        <Stack spacing={4} direction="row" sx={{display:"flex",justifyContent:"space-around"}}>
            <Box boxShadow={6} sx={{display:"flex",justifyContent:"center",width:800,height:350}}>
            <Typography variant="h4" sx={{color:"white"}}>
               HI User discover more NGFtfs
            </Typography>
            <Button></Button>
            </Box>
            <Box boxShadow={6} sx={{width:350,height:350,backgroundColor:"rgba(243, 171, 171, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)",border:"1px solid rgba(243, 171, 171, 0.3)"}}>
                <Stack spacing={4} direction="column" sx={{marginTop:"80px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <TextField size="small"  onChange={onChangeHandler} name="Name" sx={{borderRadius:"16px",width:"200px",backgroundColor:"white"}} label="Name" placeholder="Enter Your Name" required></TextField>
                    <TextField size="small"  onChange={onChangeHandler} name="Address" sx={{borderRadius:"16px",width:"200px",backgroundColor:"white"}} label="Address" placeholder="Enter Your Address" required></TextField>
                    <Button variant="contained" onClick={Submit} sx={{border:"2px solid white",borderRadius:"16px",color:"white",backgroundColor:"transparent",fontWeight:600}}>Get Started</Button>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Home;