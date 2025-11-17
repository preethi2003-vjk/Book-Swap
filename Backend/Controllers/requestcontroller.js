const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const Request=require("../Models/request.js")
const Book=require("../Models/book.js")
const User=require("../Models/user.js")
const transport=require("../services/emailservices.js")
const {randomBytes}=require("node:crypto")
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
    const request=await Request.find({donarId:decoded.id}).populate("requesterID bookId","email title")
    
    if(!request){
        res.status(404).send({message:"No request found"})
    }
    else{
        res.send(request)
    }
})
router.post("/accept",async(req,res)=>{
    const emailid=req.body.email
    const booktitle=req.body.booktitle
    const{address,date,time,requestId}=req.body
    const user=await User.findOne({email:emailid})
    if(!user){
        res.status(400).send({message:"No such user"})

    }
     else{
        await Request.findByIdAndUpdate(requestId,{status:"Accepted"},{new:true})
        
        await user.save()
        transport.sendMail({
            from: `"Admin" <${process.env.GMAIL_ADDRESS}>`,
            to: user.email,
         subject: "Request Accepeted", 
      
      html: `
               <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
                    <h2 style="color: #4CAF50;">Good News! 📚</h2>
                    <p>Hi ${user.fullName},</p> 
                    <p> Your request of the book ${booktitle} has been <strong>accepted</strong> by the donor.</p>
                    <p>${address},${date},${time}</p>


      `,
        })
        res.send({message:"Email sent"})
    }
})
router.post("/reject",async(req,res)=>{
    const{requestId}=req.body
      await Request.findByIdAndUpdate(requestId,{status:"Rejected"})
      res.send("Rejected")
})

module.exports=router