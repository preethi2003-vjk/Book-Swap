import "../../Styles/viewdonation.css"
import { useState,useEffect } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"

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
                alert("request already sent")
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
                   <div className="user-link-dash">
                <Link to="/user-dash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
            </div>
            
                <h2>📚My Donations</h2>
                <div className="section-box">

                
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
                </div>
                <h2>🤝Book Donated By Others</h2>
                <div className="section-box">

                
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
                        }} disabled={item.disabled}
                        className={item.disabled?"btn-disabled":"btn-active"}>Request</button>
                    </div>
                        )
                   })}

                   

                </div>
                </div>
            </div>
            </>
            )
}
            export default ViewDonation