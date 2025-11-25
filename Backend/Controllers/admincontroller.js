const express=require("express")
const router=express.Router()
const User=require("../Models/user")
const Library=require("../Models/library")
const Book=require("../Models/book")
const jwt=require("jsonwebtoken")
const Requests=require("../Models/request")
const adminVerify=require("../Middlewares/adminmiddlewares")
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
router.get("/viewusers",adminVerify,async(req,res)=>{
    const search=req.query.search||"";
    let query={}
    if(search.trim()!==""){
        query={
                     fullName: { $regex: search, $options: "i" }
            // $text:{$search:search}
        }
    }
    const users=await User.find(query)
    
    res.send({message:"Registered Users",users})
})
router.get("/viewlibraries",adminVerify,async(req,res)=>{
    const search=req.query.search||""
    const query={}
    if(search.trim()!==""){
        query={
             libraryName: { $regex: search, $options: "i" }
        }
    }
    const libraries=await Library.find(query)
    res.send({message:"Registered Libraries",libraries})
})
router.get("/viewrequests",adminVerify,async(req,res)=>{
        const requests=await Requests.find().populate("requesterID donarId bookId","fullName fullName title")
        
        res.send({message:"Users request",requests})
})
router.get("/viewreqpending",adminVerify,async(req,res)=>{
   

    const requests=await Requests.find({status:"Pending"}).populate("requesterID donarId bookId","fullName fullName title")
    
    res.send({message:"Weekly requests",requests})
})
router.get("/viewreqapproved",adminVerify,async(req,res)=>{
    const requests=await Requests.find({status:"Approved"}).populate("requesterID donarId bookId","fullName fullName title")
    res.send({message:"Weekly requests",requests})
})
router.get("/viewreqrejected",adminVerify,async(req,res)=>{
    const requests=await Requests.find({status:"Rejected"}).populate("requesterID donarId bookId","fullName fullName title")
    res.send({message:"Weekly requests",requests})
})
router.get("/viewdonations",adminVerify,async(req,res)=>{
   const books=await Book.find().populate("UserID","fullName email")
   res.send({message:"User Donations",books})
})
router.patch("/active",adminVerify,async(req,res)=>{
    const userid=req.body.userid
    const user=await User.findByIdAndUpdate(userid,{Approved:true})
    res.send({message:"User Activated",user})

})
router.patch("/reject",adminVerify,async(req,res)=>{
    const userid=req.body.userid
    const user=await User.findByIdAndUpdate(userid,{Approved:false})
    res.send({message:"User Activated",user})

})

module.exports=router