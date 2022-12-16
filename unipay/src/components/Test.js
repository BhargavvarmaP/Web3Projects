import React from 'react'
import { GlobalContext } from '../App'; 
const Test = () => {
   const data =  React.useContext(GlobalContext);
   console.log(data.provider); 
   return (
    <div>HI</div>
  )
}

export default Test