const {fs, link} = require("fs");
const {path} = require("path");
const {Ipfs} = require("ipfs-core");
const name=document.getElementById("name").value;
let URI;
document.querySelector("#file").addEventListener("change",upload);
async function upload(){
       const filereader = new FileReader();
       filereader.readAsArrayBuffer(event.target.files[0]);
       filereader.onload=async (event)=>{
        const node = await Ipfs.create();
        let {path} = await node.add(filereader.result);
        console.log(path);
        const ipfs="https://ipfs.io/ipfs/";
        URI=ipfs.concat(path);
        console.log(URI);
        console.log(name);
        document.getElementById("ipfslink").innerText=document.write(URI);
    }
}
