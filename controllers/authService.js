
const user = require("../model/user");
const userModel = require("../model/user");
const jwt  = require("jsonwebtoken");
const jwtKey = "e-comm" 



const registerApi = async (req,res)=>{
const body = req.body;
let  user  = await userModel.create(body);
user = user.toObject();
delete user.password;

if(user){
    jwt.sign({user},jwtKey,{expiresIn:"2h"}, (err, token)=>{
        if (err) {
            return res.json({ message:"something went wrong"})
        }
        return res.json({message:"registered  successfully", user, token}) 
    
       
         
    })

}
}
const loginApi = async (req,res)=>{
    console.log(req.body);
    if(req.body.password&&req.body.email){

    
    
    const user  = await userModel.findOne(req.body).select("-password");
     


    if(user){
        jwt.sign({user},jwtKey,{expiresIn:"2h"}, (err, token)=>{
            if (err){
                return res.json({ message:"something went wrong"})
            }
            return res.json({message:"logged successfully", user, token}) 
        
           
             
        })
       

    }
    else{
        res.json({message:"no user found"});
    }
  
    }  else{
        res.json({message:"no user found"});
    }
}

    


module.exports = {
    registerApi, loginApi }


