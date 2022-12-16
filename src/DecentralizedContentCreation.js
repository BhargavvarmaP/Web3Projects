const {fs, link} = require("fs");
const {path} = require("path");
let URI;
document.querySelector("#file").addEventListener("change",upload);
async function upload(){
       const filereader = new FileReader();
       filereader.readAsArrayBuffer(event.target.files[0]);
       filereader.onload=async (event)=>{
        const node = await Ipfs.create({ repo: "ok" + Math.random() });
        let {path} = await node.add(filereader.result);
        console.log(path);
        const ipfs="https://ipfs.io/ipfs/";
        URI=ipfs.concat(path);
        let name=document.getElementById("name").value;
        let nametext=document.createTextNode(name);
        let link=document.createElement("a");
        link.href=URI;
        link.appendChild(nametext);
        let mydiv=document.getElementById("ipfslink");
        mydiv.appendChild(link);       
    }
}