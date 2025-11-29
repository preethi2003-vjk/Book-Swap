const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = express.Router()
const Library = require("../Models/library.js")
const upload = require("../services/imageservices.js")
const User = require("../Models/user.js")
const LibBooks=require("../Models/libBooks.js")
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
    const Libraries = await Library.find().lean()
    const userid = req.user.id
    const user = await Libmembers.find({ UserId: userid }).lean()
    console.log(user)
    if (!Libraries) {
        return res.status(404).send({ message: "No Libraries Found" })
    }
    if (!user) {
        return res.send({ message: "Registered Libraries", Libraries })
    }
    const newLibraries = Libraries.map((lib) => {

        return { ...lib, disabled: user.some((item) => { return item.LibraryId.toString() === lib._id.toString() }) }
    }).filter((lib) => { return user.some((item) => { return !((item.LibraryId.toString() === lib._id.toString()) && item.status == "Accepted") }) })
    res.send({ message: "Registered Libraries", Libraries: newLibraries })

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
    const books = await LibBooks.find({ LibraryID: req.params.LibraryId });
    console.log(books)
    res.send({ books });
});
module.exports = router