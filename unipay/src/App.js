import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import {ethers} from "ethers";
export const GlobalContext = React.createContext({});
function App() {
  let [data,setdata] = React.useState({});
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractaddress = "0xb5955fac9A774295335CEAC1ec565DeeCdb696E2";
  const signer = provider.getSigner();
  const ABI = [{"inputs":[{"internalType":"address","name":"_payer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"Name","type":"string"},{"indexed":false,"internalType":"uint256","name":"Amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"Address","type":"address"}],"name":"AddedPayee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"Name","type":"string"},{"indexed":false,"internalType":"uint256","name":"Amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"Address","type":"address"},{"indexed":false,"internalType":"uint256","name":"Balance","type":"uint256"}],"name":"DeletedPayee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewPayerLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"}],"name":"PayeesCount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReceivedToContractLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferLog","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_addr","type":"address"}],"name":"AddPayee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Payer","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_payee","type":"address"}],"name":"RemovePayee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPayer","type":"address"}],"name":"RenouncePayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TransferPay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"WithdrawPayer","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];
  const contract = new ethers.Contract(contractaddress,ABI,signer);
   data =  {provider,contract,signer};   
    return (
    <div className="App"> 
     <GlobalContext.Provider value={data}>
     <Navbar />
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/Dashboard" element={<Dashboard />}/>
      <Route  path="/Profile" element={<Profile />}/>
      </Routes>
      </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
