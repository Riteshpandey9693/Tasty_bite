import "./User.css"
import {  useEffect, useState } from "react";
const User = ({name}) => {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);

   useEffect(()=> {
    //Api call
  
   }, []);
    return (
<div className="User">
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshamarch7</h4>
        <button onClick={() => {
            setCount(count + 1);
        }}>INC Count = {count}</button>
         <button onClick={() => {
            setCount2(count2 + 1);
        }}>INC Count2 = {count2}</button>

    </div>
    )
};

export default User;