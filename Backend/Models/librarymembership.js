const mongoose=require("mongoose")
const LibraryMembershipSchema=mongoose.Schema({
    UserId:{type:mongoose.Schema.ObjectId,required:true,ref:"user"},
    LibraryId:{type:mongoose.Schema.ObjectId,required:true,ref:"library"},
    status:{type:String,enum:["Pending","Accepted","Rejected"],default:"Pending"}
},{timestamps:true})
const librarymember=mongoose.model("libmember",LibraryMembershipSchema)
module.exports=librarymember
