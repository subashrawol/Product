import React, { useState ,useEffect } from "react";
import {  useNavigate } from "react-router-dom";


const Signup = ()=>{
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


const navigate = useNavigate()
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/");
      
    }

})
const collectData = async ()=>{
    const data  = await fetch("http://localhost:4000/register",{method:"post", 
body:JSON.stringify({name,email,password}),
headers: {'Content-Type':"application/json"}
});
let result  = await data.json();
console.log( result);
localStorage.setItem("user",JSON.stringify(result.user));
localStorage.setItem("token", JSON.stringify(result.token));
navigate("/");

   
}


    return (
        <div className="register">
           <h1>Register</h1>
           <input type="text" placeholder="Enter Name" value= {name} onChange={e=>setName(e.target.value)}/>
            <input type="text"  placeholder="Enter Email"  value= {email} onChange={e=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Enter Password"  value= {password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={collectData}  className="appButton" type="button">SignUp</button>
        </div>
    )
}
export default Signup