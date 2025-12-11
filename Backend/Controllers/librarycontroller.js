const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const Library=require("../Models/library.js")
const LibraryMember=require("../Models/librarymembership.js")
const LibBooks=require("../Models/libBooks.js")
const LendedBooks=require("../Models/lendedbooks.js")
const upload=require("../services/imageservices.js")
const bcrypt=require("bcrypt")
const LibraryVerify = require("../Middlewares/librarymiddleware.js")
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
         if(!library.Approved){
            return res.status(400).send({message:"Admin not permitted"})
         }
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
router.get("/libmembers",LibraryVerify,async(req,res)=>{
    const libid=req.library.id
    
    const members=await LibraryMember.find({LibraryId:libid,status:"Accepted"}).populate("UserId","fullName Gender DOB email phoneNumber District img")
    
    if(!members){
        return res.status(404).send({message:"No members"})
    }
    res.send({message:"Library Members",members})
})
router.get("/countmembers",LibraryVerify,async(req,res)=>{
    const libid=req.library.id
    const count=await LibraryMember.countDocuments({LibraryId:libid,status:"Accepted"})
    res.send({message:"Total Members",count})
})
router.get("/countbooks",LibraryVerify,async(req,res)=>{
    const libid=req.library.id
    const count=await LibBooks.countDocuments({LibraryID:libid})
    res.send({message:"Total Books",count})
})
router.get("/viewlendedinfo",LibraryVerify,async(req,res)=>{
    const libid=req.library.id
    const detailes=await LendedBooks.find({LibraryId:libid}).populate("UserId BookId","fullName title")
    console.log(detailes)
    res.send({message:"Deatiles of lended books",detailes})
})
router.get("/countlendedbooks",LibraryVerify,async(req,res)=>{
    const libid=req.library.id
    const count=await LendedBooks.countDocuments({LibraryId:libid,status:"Borrowed"})
    res.send({message:"Count of borrowed books",count})

})
module.exports=router
