const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const Library=require("../Models/library.js")
const upload=require("../services/imageservices.js")
const bcrypt=require("bcrypt")
router.post("/register",upload.single("Profile_pic"),async(req,res)=>{
    const{libraryName,regNo,email,phoneNumber,addressLine1,addressLine2,District,State,pinCode,password}=req.body
    const hashPassword=bcrypt.hashSync(password,10)
    const newLibrary=new Library({
        libraryName,
        regNo,
        email,
        phoneNumber,
        addressLine1,
        addressLine2,
        District,
        State,
        pinCode,
        password:hashPassword,
        profilePicture:req.file && req.file?.filename
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
router.get("/profile",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    
    const library=await Library.findOne({"_id":decoded.id})
    res.send({message:"Library Profile",library})
})
router.put("/updateprofile",async(req,res)=>{
     const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
   const{libraryName,regNo,email,phoneNumber,addressLine1,addressLine2,District,State,pinCode}=req.body
   await Library.findByIdAndUpdate(decoded.id,{
    libraryName,
    regNo,
    email,
    phoneNumber,
    addressLine1,
    addressLine2,
    District,
    State,
    pinCode
   })
   res.send({message:"Updated"})

} ) 

module.exports=router
