const mongoose=require("mongoose")
const LibBookSchema=mongoose.Schema({
        LibraryID:{type:mongoose.Schema.ObjectId,required:true,ref:"library"},
        title:{type:String,required:true},
        author:{type:String,required:true},
        genere:{type:String,required:true},
        publishedYear:{type:String,required:true},
       
        language:{type:String,required:true},
        description:{type:String,required:true},
        file:{type:String,required:true},
        coverImage:{type:String},
      
},{timestamps:true})
const LibBooks=mongoose.model("libBook",LibBookSchema)
module.exports=LibBooks