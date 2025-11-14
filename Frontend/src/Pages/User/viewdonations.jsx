import "../../Styles/viewdonation.css"
import { useState,useEffect } from "react"
import instance from "../../utils/apiclient"

function ViewDonation() {
    const[mydonations,setmydonations]=useState([])
    const[otherdonations,setotherDonations]=useState([])
    async function fetchDonations(){
        
        const response=await instance.get("/book/view")
        setmydonations(response.data)

    }
    async function fetchallDonations(){
        const response=await instance.get("/book/viewall")
        setotherDonations(response.data)
    }
    async function sendRequest(bookId){
            try{
                const response=await instance.post("/request/send",{bookId})
                alert("request send ")
                
                let index=otherdonations.findIndex((book)=>{
                    return book._id==bookId
                })
                
                otherdonations[index].disabled=true
                setotherDonations([...otherdonations])
            }
            catch{
                alert("failed")
            }
    }
    useEffect(()=>{
        fetchDonations()
        fetchallDonations()
    },[])
    return (
        <>
            <div className="view-donation-books">
                <h1>VIEW DONATIONS</h1>
                <h2>📚My Donations</h2>
                <div className="my-books">
                   {mydonations.map((item)=>{
                    return(
                        <div className="mybook-card">

                        <img src={"http://localhost:8080/uploads/"+item.coverImage}
                       
                        />
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <p>{new Date(item.Date).toLocaleDateString()}</p>
                    </div>
                    )
                   })} 
                    
                    
                </div>
                <h2>🤝Book Donated By Others</h2>
                <div className="others-books">
                   {otherdonations.map((item)=>{
                        return(
                             <div className="mybook-card">
                        <img src={"http://localhost:8080/uploads/"+item.coverImage}/>
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <p>date of donation</p>
                        <button onClick={()=>{
                            sendRequest(item._id)
                        }} disabled={item.disabled}>Request</button>
                    </div>
                        )
                   })}

                   

                </div>
            </div>
            </>
            )
}
            export default ViewDonation