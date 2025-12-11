const mongoose=require("mongoose")
const lendedBookSchema=mongoose.Schema({
    UserId:{type:mongoose.Schema.ObjectId,required:true,ref:"user"},
    LibraryId:{type:mongoose.Schema.ObjectId,required:true,ref:"library"},
    BookId:{type:mongoose.Schema.ObjectId,required:true,ref:"libBook"},
    status:{type:String,enum:["Borrowed","Returned"],default:"Borrowed"}

},{timestamps:true})
const lendedbooks=mongoose.model("lendedbooks",lendedBookSchema)
module.exports=lendedbooks