const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const Book=require("../Models/book.js")
const upload=require("../services/imageservices.js")
router.post("/add",upload.single("cover_Image"),async(req,res)=>{
    try{
        const{title,author,genere,publishedYear,ISBN,language,description}=req.body
        const token=req.headers.authorization.slice(7)
        const decoded=jwt.verify(token,process.env.JWT_TOKEN)
        const book=new Book({
            UserID:decoded.id,
            title,
            author,
            genere,
            publishedYear,
            ISBN,
            language,
            description,
            coverImage:req.file&&req.file?.filename,
            Date: new Date()
        })
        await book.save()
        await book.populate("UserID")
        res.send({message:"Successfully added",book})
    }
    catch(e){
        if (e instanceof jwt.JsonWebTokenError || e instanceof jwt.TokenExpiredError) {
            res.status(403).send({ message: "jwt error", error: e })

        }
        res.status(400).send({ message: "Error Occured", error: e })
    }
    
})
router.get("/view",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    
   
   
    const books=await Book.find({UserID:decoded.id})
    if(!books){
        res.status(404).send({message:"No books found"})
        
    }
    else{
        res.send(books)
    }
})
router.get("/viewall",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    
    const books=await Book.find({UserID:{$ne:decoded.id}})
    if(!books){
        res.status(404).send({message:"No books found"})
        
    }
    else{
        
        res.send(books)
    }
})
module.exports=router
