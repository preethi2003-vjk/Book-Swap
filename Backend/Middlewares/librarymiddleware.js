const jwt=require("jsonwebtoken")
function LibraryVerify(req,res,next){
    try{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    if(!decoded.id){
        return res.status(403).send({message:"Unauthorized"})
    }
    
    req.library = decoded
    
    next()
    }
    catch(e){
        if(e instanceof jwt.JsonWebTokenError){
            res.status(403).send({message:"Unauthorized"})
        }
        else{
            res.status(500)
        }
    }
    
}
module.exports=LibraryVerify