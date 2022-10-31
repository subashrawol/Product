import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
const Login = ()=>{
 const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = localStorage.getItem("user");
   useEffect(()=>{
    if(auth){
        navigate("/");
    }
   })





const handleLogin = async ()=>{
    console.log(email,password)
    let result  = await fetch("http://localhost:4000/login",{method:"post", 
body:JSON.stringify({email,password},),
headers:{
    "Content-Type":"application/json"
}

})

result = await result.json();
console.log(result.user);

if(result.token){
    localStorage.setItem("user", JSON.stringify(result.user));
    localStorage.setItem("token", JSON.stringify(result.token));

    navigate("/")
  
}
  else{
    alert("name is not present in the database");
}
}



    return(
<div className="login">
    <h1>Login Page</h1>
    <input type="text" className="inputBox" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input type="text"  className="inputBox" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)} /> 
    <button  className="appButton" onClick={handleLogin}>Login</button>
</div>
    )
}

export default Login