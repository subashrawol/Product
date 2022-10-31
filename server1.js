const { publicEncrypt } = require("crypto");
const express = require("express")
const path = require("path")
const app = express();
 const publicPath = path.join(__dirname,"public")
 app.set("view engine", 'ejs');
 
app.get("",(req,res)=>{
    console.log("data sent by browser ==> ", req.query)
    res.sendFile(`${publicPath}/home.html`,)

})
 app.get("/profile", (req,res)=>{
    const user = {
        name: "subash",
        email:"n.subashrawol@iorta.in",
        city:"bangalore"
    }
    res.render('profile', {user});
 })
app.get("/about",(req,res)=>{
   res.sendFile(`${publicPath}/about.html`)


})
app.get("/login",(req,res)=>{
    res.render('login')
})

app.get("*",(req,res)=>{
    res.sendFile(`${publicPath}/PNF.html`)
    
 
 })



app.listen(4000, (req,res)=>{
    console.log("sever ran")
});
// app.post("/create", (req,res)=>{
//    let body = req.body;
//   const  data = new videoModel(body);
//   const data1 = data.save();
//   return res.json({"message":"inserted", data1})
// })

// app.get("/get",  async (req,res)=>{
//     const data = await videoModel.find()
//     console.log(data)
// })

// app.delete("/delete/:id", async (req,res)=>{
//     const update = await videoModel.deleteOne(req.params);
//     return res.json({message:"data deleted", update});

// })

// app.put("/update/:id", async (req,res)=>{
//     const update = await videoModel.updateOne(req.params,

//         {
//             $set:req.body
//         }
//         );
//     return res.json({message:"data updated", update});
    
// })