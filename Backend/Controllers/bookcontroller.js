const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")

const Book=require("../Models/book.js")
const Request=require("../Models/request.js")
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
    console.log(books)
    const request=await Request.find({requesterID:decoded.id}).select("bookId")
    console.log(request)
    const idArray=request.map((item)=>{
            return item.bookId.toString()
    })
    console.log(idArray)
    
    if(!books){
        res.status(404).send({message:"No books found"})
        
    }
    else{
        if(idArray.length==0){
            res.send(books)
            return
        }
        
        let newBooks=books.map((book)=>{
        if(idArray.includes(book._id.toString())){
            return {...book.toJSON(),disabled:true}
        }
        else{
            return book
        }
    })
        
        res.send(newBooks)
    }
})
module.exports=router
