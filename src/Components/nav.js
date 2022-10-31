import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./styles.css"
import image from "./kaby.png";
const Nav = () => {
  const navigate = useNavigate()
const auth = localStorage.getItem("user");
  const logout = ()=>{
    localStorage.clear();
navigate('/signup');
  }

 
  return (
    <div>

    {auth? <ul className='nav-ul'>
  <img src = {image} className="img"  alt="iamge" />
        <li><Link  to="/">Products</Link></li>
        <li><Link  to="/add">Add Products</Link></li>
        <li><Link to = "/profile">Profile</Link></li>
        <li><Link onClick= {logout } to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
  </ul>
            
      :       
  <ul className='nav-ul nav-right'><li><Link to = "/login" >Login</Link></li>
             <li> <Link to ="/signup">Sign Up</Link></li>

  </ul>
        
       
     
}
    </div>
  )
}

export default Nav