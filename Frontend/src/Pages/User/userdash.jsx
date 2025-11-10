import Usernavbar from "../../Components/usernavbar"
import "../../Styles/userdash.css"
import instance from "../../utils/apiclient"
import { useState,useEffect } from "react"
function Userdash(){
    const[detailes,setdetailes]=useState()
    async function user(){
        const response=await instance.get("/user/profile")
         setdetailes(response.data.user)
        
    }
    useEffect(()=>{
       user()
    },[])
    
    return(
        <>
        <Usernavbar/>
        <div className="userdash-contnet">
            <h1>“Welcome back, {detailes?.fullName}!” </h1>
            <h3>“Ready to find your next great read?”</h3>
            <h3>“Exchange books, connect minds, and save the planet.”</h3>
        </div>
        
        </>
    )
}
export default Userdash