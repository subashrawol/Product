import React, { useEffect, useState } from 'react'
import { useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import "./styles.css"

const UpdateProduct = () => {
    const [name,setName]= useState("");
    const [price,setPrice]= useState("");
    const [category,setCategory]= useState("");
    const [company,setCompany]= useState("");
    const params  = useParams();
    const navigate = useNavigate();
  
  useEffect(()=>{
    
    getProductDetails();

  },[])

  const getProductDetails = async()=>{
    let result = await fetch(`http://localhost:4000/getOne/${params.id}`, {headers:{authorization:JSON.parse(localStorage.getItem("token"))}} );
    result  = await result.json();
console.log(result);
    setName(result.data.name);
    setPrice(result.data.price);
    setCategory(result.data.category);
    setCompany(result.data.company);
   
  

  };

  const update =  async ()=>{
   let result   = await fetch(`http://localhost:4000/update/${params.id}`,
   
   {method:"put",  body:JSON.stringify({name, price,company,category}),
headers:{"Content-Type":"application/json", authorization:JSON.parse(localStorage.getItem("token"))}



},

   
   );
    result  = await result.json();
    console.log(result);
    navigate("/");
  }



    
  return (
<div className='product'>
<input type="text" className='inputBox' value={name}    onChange={e=>setName(e.target.value)} placeholder='Enter Product Name'/>
<input type="text" className='inputBox' value={price}   onChange={e=>setPrice(e.target.value)}  placeholder='Enter price '/>
<input type="text"  className='inputBox'value={category} onChange={e=>setCategory(e.target.value)}  placeholder='Enter category '/>
<input type="text" className='inputBox' value={company}  onChange={e=>setCompany(e.target.value)}  placeholder='Enter  Company'/>
<button  className="appButton" onClick={update }>Update Product</button>
</div>

 
  )
}

export default UpdateProduct