const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const usermodel=require('./models/user')
const path = require('path')

mongoose.connect('mongodb+srv://Sree:1955@toy.dtwkmba.mongodb.net/crud').then(()=>{
    console.log('true')
}).catch((err)=>{
    console.log(err)
})



const app=express()
app.use(express.json())
app.use(cors())

app.post('/AddUser',async(req,res)=>{
     usermodel.insertMany(req.body)
    
})
app.get('/getUsers',async(req,res)=>{
   let users=await usermodel.find()
   res.json(users)
})
app.post('/replace/:id',async(req,res)=>{
    let id=req.params.id

   let user= await usermodel.find({_id:id})
   
    res.json(user)
})
app.post('/editUser/:id',async(req,res)=>{
    let id=req.params.id
    let userU=req.body
   await usermodel.findByIdAndUpdate({_id:id},userU)
})


app.post('/remove/:id',async(req,res)=>{
    let id=req.params.id
   await usermodel.findByIdAndDelete({_id:id})
})
app.use(express.static(path.join(__dirname,'build')))
app.get('*',(req,res)=>{
    res.sendFile(require('path').resolve(__dirname,"build","index.html"))
})

app.listen('8055',(req,res)=>{
    console.log("started");
})