const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const Library=require("../Models/library.js")
const bcrypt=require("bcrypt")
router.post("/register",async(req,res)=>{
    const{libraryName,regNo,email,phoneNumber,addressLine1,addressLine2,City,State,pinCode,password}=req.body
    const hashPassword=bcrypt.hashSync(password,10)
    const newLibrary=new Library({
        libraryName,
        regNo,
        email,
        phoneNumber,
        addressLine1,
        addressLine2,
        City,
        State,
        pinCode,
        password:hashPassword
    })
    await newLibrary.save()
    res.send({message:"Library Created",newLibrary})
})

router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    const library=await Library.findOne({email})
    if(!library){
        res.status(404).send({message:"No such Library exists"})
    }
    else{
        const iscrtpassword= bcrypt.compareSync(password,library.password)
                if(iscrtpassword){
                    const token=jwt.sign({id:library._id},process.env.JWT_TOKEN)
                    res.send({message:"Library Logged in Successfully",library,token})
        
                }
                else{
                    res.status(400).send({ message: "Incorrect Password" })
                }
    }
})
module.exports=router