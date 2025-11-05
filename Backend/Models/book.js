const mongoose=require("mongoose")
const BookSchema=mongoose.Schema({
    UserID:{type:mongoose.Schema.ObjectId,required:true,ref:"user"},
    title:{type:String,required:true},
    author:{type:String,required:true},
    genere:{type:String,required:true},
    publishedYear:{type:String,required:true},
    ISBN:{type:String,required:true},
    language:{type:String,required:true},
    description:{type:String,required:true},
    condition:{type:String,required:true},
    coverImage:{type:String,required:true}


})
const Book=mongoose.model("book",BookSchema)
module.exports=Book