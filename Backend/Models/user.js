const mongoose=require("mongoose")
const userSchema=mongoose.Schema(
    {
        fullName:{type:String,required:true},
        Gender:{type:String,required:true},
        DOB:{type:String,required:true},
        email:{type:String,required:true},
        phoneNumber:{type:String,required:true},
        addressLine1:{type:String,required:true},
        addressLine2:{type:String,required:true},
        District:{type:String,required:true},
        State:{type:String,required:true},
        pinCode:{type:String,required:true},
        Country:{type:String,required:true},
        password:{type:String,required:true},
       img:{type:String},
       Approved:{type:Boolean,default:false}
 }

)
userSchema.index({fullName:"text"})
const User=mongoose.model("user",userSchema)
module.exports=User