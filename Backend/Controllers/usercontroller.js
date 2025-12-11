const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = express.Router()
const Library = require("../Models/library.js")
const upload = require("../services/imageservices.js")
const User = require("../Models/user.js")
const LibBooks=require("../Models/libBooks.js")
const LendedBooks=require("../Models/lendedbooks")
const Libmembers = require("../Models/librarymembership.js")
const UserVerify = require("../Middlewares/usermidlleware.js")
router.post("/register", upload.single("Profile_pic"), async (req, res) => {
    const { fullName, Gender, DOB, email, phoneNumber, addressLine1, addressLine2, District, State, pinCode, password, Country } = req.body
    const hashPassword = await bcrypt.hashSync(password, 10)
    const newUser = new User({
        fullName,
        Gender,
        DOB,
        email,
        phoneNumber,
        addressLine1,
        addressLine2,
        District,
        State,
        pinCode,
        Country,
        password: hashPassword,
        img: req.file && req.file?.filename
    })
    await newUser.save()
    console.log(req.body)
    res.send({ message: "User Created", newUser })

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    // console.log(req.body)
    const user = await User.findOne({ email })

    if (!user) {
        res.status(404).send({ message: "No such user exist" })
    }

    else {
        if (!user.Approved) {
            return res.status(400).send({ message: "Admin not permitted" })
        }

        const iscrtpassword = bcrypt.compareSync(password, user.password)
        
        if (iscrtpassword) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN)
            res.send({ message: "User Logged in Successfully", user, token })

        }
        else {

            res.status(400).send({ message: "Incorrect Password" })
        }
    }
})
router.get("/profile", UserVerify, async (req, res) => {

    const user = await User.findOne({ "_id": req.user.id })

    res.send({ message: "User Profile", user })
})
router.put("/updateprofile", UserVerify, upload.single("Profile_pic"), async (req, res) => {





    const { fullName, email, phoneNumber, addressLine1, addressLine2, District, State, pinCode, Country } = req.body

    await User.findByIdAndUpdate(req.user.id, {
        fullName,
        email,
        phoneNumber,
        addressLine1,
        addressLine2,
        District,
        State,
        pinCode,
        Country,

        img: req.file && req.file?.filename
    })

    res.send({ message: "Updated" })


})
router.get("/viewlibraries", UserVerify, async (req, res) => {
    
    try {
        const Libraries = await Library.find().lean(); 
        const userid = req.user.id;

      
        const acceptedLibs = await Libmembers.find({ UserId: userid, status: "Accepted" }).lean();

    
        const newLibraries = Libraries.filter(
            (lib) => !acceptedLibs.some((item) => item.LibraryId.toString() === lib._id.toString())
        );

        res.send({ message: "Registered Libraries", Libraries: newLibraries });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }

})
router.get("/joinlib", UserVerify, async (req, res) => {
    const userid = req.user.id
    const joinedlibraries = await Libmembers.find({ UserId: userid, status: "Accepted" }).populate("LibraryId", "libraryName regNo email phoneNumber addressLine1 addressLine2 District State pinCode profilePicture")
    if (!joinedlibraries) {
        return res.status(404).send({ message: "No libraries found" })
    }
    res.send({ message: "Accepted Libraries", joinedlibraries })
})
router.get("/view/:LibraryId",UserVerify, async (req, res) => {
    try {
        const libraryId = req.params.LibraryId;

       
        const books = await LibBooks.find({ LibraryID: libraryId }).lean();

  
        const borrowedBooks = await LendedBooks.find({ 
            LibraryId: libraryId, 
            status: "Borrowed" 
        }).lean();

        
        const booksWithStatus = books.map((book) => ({
            ...book,
            isBorrowed: borrowedBooks.some(lb => lb.BookId.toString() === book._id.toString())
        }));

        res.send({ books: booksWithStatus });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
});
module.exports = router