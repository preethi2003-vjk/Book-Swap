const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const upload=require("../services/imageservices.js")
const LibBooks=require("../Models/libBooks.js")
const Library=require("../Models/library.js")
router.post("/add",upload.fields([{name:"pdf",maxCount:1},{name:"pic",maxCount:1}]),async(req,res)=>{
     try{
        
        const{title,author,genere,publishedYear,language,description,}=req.body
        const token=req.headers.authorization.slice(7)
        const decoded=jwt.verify(token,process.env.JWT_TOKEN)
        const book=new LibBooks({
            LibraryID:decoded.id,
            title,
            author,
            genere,
            publishedYear,
             language,
            description,
            file:req.files&&(req.files.pdf&&req.files.pdf[0].filename),
            coverImage:req.files&&(req.files.pic&&req.files.pic[0].filename),
            
        })
        await book.save()
        
        res.send({message:"Successfully added",book})
      
        console.log(req.files)
    }
    catch(e){
        if (e instanceof jwt.JsonWebTokenError || e instanceof jwt.TokenExpiredError) {
            res.status(403).send({ message: "jwt error", error: e })

        }
        res.status(400).send({ message: "Error Occured", error: e })
    }
})
module.exports=router