const mongoose=require("mongoose")
const requestSchema=mongoose.Schema({
      requesterID:{type:mongoose.Schema.ObjectId,required:true,ref:"user"},
      donarId:{type:mongoose.Schema.ObjectId,required:true,ref:"user"},
      bookId:{type:mongoose.Schema.ObjectId,required:true,ref:"book"},
      status:{type:String,enum:["Pending","Accepted","Rejected"],default:"Pending"},
      // Date:{type:Date,required:true}
      
},{timestamps:true})
const Request=mongoose.model("request",requestSchema)
module.exports=Request