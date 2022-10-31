const {fs} = require("fs");
const {path} = require("path");
const {IPFS} = require("ipfs-core");
const name=document.getElementById("name").value;
let URI;
document.querySelector("#file").addEventListener("click",upload);
async function upload(){
       const filereader = new FileReader();
       filereader.readAsArrayBuffer(event.target.files[0]);
       filereader.onload=async (event)=>{
        const node = await IPFS.create();
        let {path} = await node.add(filereader.result);
        console.log(path);
        const ipfs="https://ipfs.io/ipfs/";
        URI=ipfs.concat(path);
        console.log(URI);
        console.log(name);
        
    }
}