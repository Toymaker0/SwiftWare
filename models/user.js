const mongoose=require('mongoose')
const userSchma=new mongoose.Schema({
    Name:String,
    Exp:String,
    Age:String
})

const usermodel=mongoose.model("users",userSchma)

module.exports=usermodel