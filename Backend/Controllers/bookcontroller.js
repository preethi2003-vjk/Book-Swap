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
            coverImage:req.file&&req.file?.filename
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
router.get("/view/:id",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    if(decoded.id!==req.params.id){
        res.status(403).send({ message: "Unauthorized access" })
    }
   
    const books=await Book.findOne({UserID:decoded.id})
    if(!books){
        res.status(404).send({message:"No books found"})
        
    }
    else{
        res.send(books)
    }
})
module.exports=router
