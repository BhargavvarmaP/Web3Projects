import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import {ethers} from "ethers";
import Lender from "./components/Lender";
import Borrower from "./components/Borrower";
import Home from "./components/Home";
export const GlobalStateContext = React.createContext({});
function App() {
  var [data,setdata] = React.useState({});
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractaddress = "0x39289755CDB43c5b97F67f160d83005d9A012ee3";
  const signer = provider.getSigner();
  const ABI = [{"inputs":[{"internalType":"address payable","name":"_lender","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lender","type":"address"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"loanamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duedate","type":"uint256"}],"name":"LoanAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"LoanPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"loanamount","type":"uint256"}],"name":"LoanRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lender","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Possessed","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"name":"AddWhitelistToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_borrower","type":"address"}],"name":"LoanStatus","outputs":[{"components":[{"internalType":"uint256","name":"loanid","type":"uint256"},{"internalType":"address","name":"lender","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"contract IERC20","name":"collateraltoken","type":"address"},{"internalType":"uint256","name":"collateralamount","type":"uint256"},{"internalType":"uint256","name":"loanamount","type":"uint256"},{"internalType":"uint256","name":"payoffamount","type":"uint256"},{"internalType":"uint256","name":"loanduration","type":"uint256"},{"internalType":"uint256","name":"duedate","type":"uint256"},{"internalType":"enum LoanFi.STATUS","name":"status","type":"uint8"}],"internalType":"struct LoanFi.Loan","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"name":"RemoveWhitelistToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newlender","type":"address"}],"name":"Renouncelender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_collateralamount","type":"uint256"},{"internalType":"uint256","name":"_loanamount","type":"uint256"},{"internalType":"uint256","name":"_payoffamount","type":"uint256"},{"internalType":"uint256","name":"_loanduration","type":"uint256"}],"name":"RequestLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_borrower","type":"address"}],"name":"lendEther","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"payLoan","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_borrower","type":"address"}],"name":"repossess","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  const contract = new ethers.Contract(contractaddress,ABI,signer);
   data =  {provider,contract,signer};
  return (
    <GlobalStateContext.Provider value={data}>
    <div className="App">
      <NavBar />
      <Home />
      <Lender/>
      <Borrower />
    </div>
    </GlobalStateContext.Provider>
  );
}

export default App;
