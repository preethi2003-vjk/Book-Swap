const mongoose=require("mongoose")
const librarySchema=mongoose.Schema({
    libraryName:{type:String,required:true},
    regNo:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    addressLine1:{type:String,required:true},
    addressLine2:{type:String,required:true},
    District:{type:String,required:true},
    State:{type:String,required:true},
    pinCode:{type:String,required:true},
    password:{type:String,required:true},
    profilePicture:{type:String},
    Approved:{type:Boolean,default:false}
})
librarySchema.index({libraryName:"text"})
const Library=mongoose.model("library",librarySchema)
module.exports=Library