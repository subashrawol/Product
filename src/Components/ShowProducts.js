import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom"

const ShowProducts = ()=>{
const [products, setProducts] = useState([]);
useEffect(()=>{
  
 
 list()

},[])

const list =  async ()=>{
    let result  = await  fetch("http://localhost:4000/getAll", {headers:{authorization:JSON.parse(localStorage.getItem("token"))}})
    result  = await result.json();
    let data   = result.data;
    
    setProducts(data);
}

console.log("array of products",products)
 const deleteProduct = async  (id)=>{

    let result  = await  fetch(`http://localhost:4000/delete/${id}`,{method:"Delete"}, {headers:{authorization:JSON.parse(localStorage.getItem("token"))}})
        result  =  await result.json();
   if(result){
    list()
   }
  
  
 }
 const searchHandle =  async  (e)=>{
    let data  = e.target.value;
    if(data){
    let result  = await fetch(`http://localhost:4000/search/${data}` ,{headers:{authorization:JSON.parse(localStorage.getItem("token"))}});
    result  = await result.json();

    setProducts(result.data);
    }
    else{
        list()
    }
   }
    


return(
<div className="show">



<h3 className="all">All Products</h3>
<input type="" placeholder="search Product" className="search" onChange={searchHandle} ></input>
<ul>
    <li>sr.no</li>
    <li>Product</li>
    <li>category</li>
    <li>Company</li>
    <li>Price</li>
    <li>Operation</li>

    </ul>

   {
   products.length? products.map((item, index)=>{
     return( <ul key={item._id}>
    <li>{index+1}</li>
    <li>{item.name}</li>
    <li>{item.category}</li>
    <li>{item.company}</li>
    <li>{item.price}</li>
    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
    <Link to ={"/update/"+item._id}>Update</Link>
    
    </li>
   
    </ul>
     )
    })
    :<h1>No Result Found</h1>
   }

</div>

)


}

export default ShowProducts