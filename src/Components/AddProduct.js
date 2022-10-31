import React, { useState } from 'react'
import "./styles.css"
const AddProduct = () => {
    const [name,setName]= useState("");
    const [price,setPrice]= useState("");
    const [category,setCategory]= useState("");
    const [company,setCompany]= useState("");
  
    const handleProduct =  async()=>{
    
const id = localStorage.getItem("user");
let userId  = JSON.parse(id)._id;
console.log(userId);


const data  =  await fetch("http://localhost:4000/add", {method:"post",
body: JSON.stringify({name,price,category,company, userId }),
headers:{"Content-Type":"application/json",
authorization: JSON.parse(localStorage.getItem('token'))

}
  
})
let data1  = await data.json();
console.log(data1);

    }

    
  return (
<div className='product'>
<input type="text" className='inputBox' value={name}    onChange={e=>setName(e.target.value)} placeholder='Enter Product Name'/>
<input type="text" className='inputBox' value={price}   onChange={e=>setPrice(e.target.value)}  placeholder='Enter price '/>
<input type="text"  className='inputBox'value={category} onChange={e=>setCategory(e.target.value)}  placeholder='Enter category '/>
<input type="text" className='inputBox' value={company}  onChange={e=>setCompany(e.target.value)}  placeholder='Enter  Company'/>
<button  className="appButton" onClick={handleProduct }>Add Product</button>
</div>

 
  )
}

export default AddProduct