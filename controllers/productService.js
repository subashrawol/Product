
const  productModel  = require("../model/product");
const jwt = require("jsonwebtoken");

let  verifyToken = (req,res,next)=>{
   let  token = req.headers["authorization"]
  if(token){
jwt.verify(token, "e-comm", (err,valid)=>{
    if(err){
return res.status(403).json({message:"please provide valid token"})
    }else{
next()
    }
} )
  } else{
return res.json({message:"please add token inside header"})
  } 
  

    
    }


const addProduct = async (req,res)=>{
    const data  = await productModel.create(req.body);
    return res.json({message:"products are added" , data});

}
const getProducts =  async  (req,res)=>{
const data = await productModel.find(req.body);
return res.json({message:"fetched all products", data});
}
const deleteProducts = async (req,res)=>{
    
    const data  = await productModel.deleteOne({_id: req.params.id})
return res.json({message:`your product is deleted ${req.params.id} `,data});
}
const oneProduct  = async (req,res)=>{
    const data  = await productModel.findOne({_id:req.params.id});
if(data){
    return res.json({message:"product  has been found", data});
}else{
    return res.json({message:"no record found", data});
}

   

}
const updateProduct = async (req,res)=>{
const data  = await productModel.update({_id:req.params.id},{$set: req.body} );
return res.json({message:"product has been updated", data});

};

const searchProduct =   async (req,res)=>{

    let data  = await productModel.find({
"$or":[
    {name:{$regex:req.params.key}},
    {price:{$regex:req.params.key}},
    {category:{$regex:req.params.key}},
    {company:{$regex:req.params.key}}

]

    });
    return res.json({message:"found successfully", data})
}



module.exports  = {
    addProduct,
    getProducts,
    deleteProducts,
    oneProduct,
    updateProduct,
    searchProduct,
     verifyToken
}