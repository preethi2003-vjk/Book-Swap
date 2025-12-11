const express=require("express")
const router=express.Router()
const LendedBooks=require("../Models/lendedbooks")
const User=require("../Models/user")
const Library=require("../Models/library")
const UserVerify=require("../Middlewares/usermidlleware")
router.post("/record", UserVerify, async (req, res) => {
    const UserId = req.user.id;
    const LibraryId = req.body.libraryid;
    const BookId = req.body.bookid;

    
    const existing = await LendedBooks.findOne({ BookId, LibraryId, status: "Borrowed" });
    if (existing) {
        return res.status(400).send({ message: "Book is already borrowed" });
    }

    const newlendedBooks = new LendedBooks({
        UserId,
        LibraryId,
        BookId,
        status: "Borrowed"
    });

    await newlendedBooks.save();
    res.send({ message: "Book lended", bookId: BookId }); 
})
router.get("/view",UserVerify,async(req,res)=>{
    const userid=req.user.id
    const lendedBooks=await LendedBooks.find({UserId:userid,status:"Borrowed"}).populate("BookId","title author file")
    res.send({message:"Books lended",lendedBooks})
})
router.patch("/update",UserVerify,async(req,res)=>{
    try {
        const bookid = req.body.bookid;
        const userid = req.user.id;

        const lendedbook = await LendedBooks.findOneAndUpdate(
            { BookId: bookid, UserId: userid, status: "Borrowed" },
            { status: "Returned" },
            { new: true }
        );

        if (!lendedbook) {
            return res.status(404).send({ message: "Book not found or already returned" });
        }

        res.send({ message: "Book Returned", lendedbook });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
})
module.exports=router