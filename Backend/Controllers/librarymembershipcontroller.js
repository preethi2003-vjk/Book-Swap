const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const LibraryMember=require("../Models/librarymembership")
const UserVerify=require("../Middlewares/usermidlleware.js")
const LibraryVerify=require("../Middlewares/librarymiddleware.js")
router.post("/add",UserVerify,async(req,res)=>{
    const LibraryId=req.body.libraryid
    const UserId=req.user.id
    
    const newMember=new LibraryMember({
         UserId,
         LibraryId
        
    })
    await newMember.save()
    res.send({message:"New member joined",newMember})


})
router.get("/viewreq",LibraryVerify,async(req,res)=>{
    const libid=req.library.id
    const librequest=await LibraryMember.find({LibraryId:libid}).populate("UserId","fullName DOB")
    console.log(librequest)
    res.send({message:"Request received",librequest})
})
router.patch("/approve",LibraryVerify,async(req,res)=>{
    const reqid=req.body.reqid
    const request=await LibraryMember.findByIdAndUpdate(reqid,{status:"Accepted"})
    res.send({message:"Request accepeted",request})
})
router.patch("/reject",LibraryVerify,async(req,res)=>{
    const reqid=req.body.reqid
    const request=await LibraryMember.findByIdAndUpdate(reqid,{status:"Rejected"})
    res.send({message:"Request rejected",request})
})

module.exports=router