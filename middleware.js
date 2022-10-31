const reqFilter = (req,res,next)=>{
if(!req.query.age){
    res.send("please provide age");
}
else if(req.query.age>=18&&req.query.age<=90){
    next();
}
else{
    res.send("you should be above 18")
}
}
module.exports = reqFilter