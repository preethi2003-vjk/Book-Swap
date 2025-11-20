const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const upload=require("../services/imageservices.js")
const LibBooks=require("../Models/libBooks.js")
const Library=require("../Models/library.js")
router.post("/add",upload.single("cover_Image"),async(req,res)=>{
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
            // file:,
            coverImage:req.file&&req.file?.filename,
            
        })
        await book.save()
        // await book.populate("UserID")
        res.send({message:"Successfully added",book})
    }
    catch(e){
        if (e instanceof jwt.JsonWebTokenError || e instanceof jwt.TokenExpiredError) {
            res.status(403).send({ message: "jwt error", error: e })

        }
        res.status(400).send({ message: "Error Occured", error: e })
    }
})
module.exports=router