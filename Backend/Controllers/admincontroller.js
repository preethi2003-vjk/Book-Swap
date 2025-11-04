const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
router.post("/login",async(req,res)=>{
    const{username,password}=req.body
    if(username=="admin" && password=="admin@123"){
        const token=jwt.sign({admin:true},process.env.JWT_TOKEN)
        res.send({message:"Login Successfully",token})
    }
    else{
        res.status(400).send({message:"Invalid Credentiales"})
    }
})
module.exports=router