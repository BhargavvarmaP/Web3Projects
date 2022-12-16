import React from 'react';
import {Paper,Box,Stack,Typography,TextField,Button,Table,TableBody,TableCell,TableRow,TableContainer,TableHead} from "@mui/material";

const Content = () => {
    const [fileURI,setfileURI] = React.useState("");
    const [Filename,setFilename] = React.useState("");
    
    function createData(FileName, FileURI) {
      return { FileName, FileURI};
    }
    
    
    const  rows =  [
      createData(Filename,fileURI)
    ];   

     function onSubmit() {

    }  

    async function filehandler(e) {
      e.preventDefault();
      const file = e.target.files[0];
      if(typeof file!= "undefined"){
          try {
              const ipfs = await window.Ipfs.create();
          let result = await ipfs.add(file);
          console.log(result);
          await ipfs.stop();
              setfileURI("https://ipfs.io/ipfs/"+result.path);
          }catch(error){
              console.log("Upload Error :",error);
          }
      }
    }
  return (
    <React.Fragment>
        <Box   boxShadow={4} alignItems="center" sx={{margin:"auto",width:600,height:400,background:"transparent",marginTop:"80px",border:"2px solid skyblue"}}>
            <Stack orientation="vertical" spacing={5} alignItems="center" sx={{margin:"60px 20px"}}>
        <Typography variant="h5">
          Decentralized Content Creation
        </Typography>
          <TextField onChange={(e)=>{setFilename(e.target.value)}} label="Filename" placeholder="Enter your Filename" />
          <TextField onChange={filehandler} type="file"/>
          <Button onClick={onSubmit} variant="contained">Submit</Button>
        </Stack>
        </Box>
        <center>
        <TableContainer component={Paper}>
      <Table sx={{ width:800,marginTop:"50px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell align="right">File URI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.FileURI}>
              <TableCell component="th" scope="row">
                {row.FileName}
              </TableCell>
              <TableCell align="right"><a href={row.FileURI}>{row.FileURI}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </center>
    </React.Fragment>
  )
}

export default Content;