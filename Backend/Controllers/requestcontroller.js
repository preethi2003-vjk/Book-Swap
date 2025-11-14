const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const Request=require("../Models/request.js")
const Book=require("../Models/book.js")
const User=require("../Models/user.js")
router.post("/send",async(req,res)=>{
        const token=req.headers.authorization.slice(7)
       const decoded=jwt.verify(token,process.env.JWT_TOKEN)
       const requesterID=decoded.id
       
        const{bookId}=req.body
        const book=await Book.findById(bookId)
        const existingRequest=await Request.find({requesterID,bookId})
        if(existingRequest.length!=0){
            return res.status(400).send({message:"request alerady exist"})
        }
        const donarId=book.UserID
        const newRequest=new Request({
            requesterID,
            donarId,
            bookId,
            status: "Pending",
            Date:new Date()
        })
        await newRequest.save()
        res.send({message:"Request sent"})
 

})

router.get("/view",async(req,res)=>{
       const token=req.headers.authorization.slice(7)
       const decoded=jwt.verify(token,process.env.JWT_TOKEN)
       const request=await Request.find({requesterID:decoded.id}).populate("bookId","title")
        console.log(request)
       if(!request){
        res.status(404).send({message:"No request found"})
       }
       else{
        
        res.send(request)
       }
       
})
router.get("/receive",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const request=await Request.find({donarId:decoded.id}).populate("requesterID bookId","fullName title")
    console.log(request)
    if(!request){
        res.status(404).send({message:"No request found"})
    }
    else{
        res.send(request)
    }
})
module.exports=router