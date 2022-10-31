
const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRoutes");
const productRoute  = require("./routes/productRoutes")
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/e-commerce";

const connect = async ()=>{
await mongoose.connect(url);

}
connect();
app.use(bodyParser.json())
app.use(cors())
app.use("/", userRoute);
app.use("/",productRoute);

app.listen(4000, console.log("sever ran"));
