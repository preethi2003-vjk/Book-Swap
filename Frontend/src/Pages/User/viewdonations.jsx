import "../../Styles/viewdonation.css"
import { useState,useEffect } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"

function ViewDonation() {
    const[mydonations,setmydonations]=useState([])
    const[otherdonations,setotherDonations]=useState([])
        const [selectedBook, setSelectedBook] = useState(null)
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
                
                   <div className="user-link-dash">
                <Link to="/user-dash"><button>Back</button></Link>
                <h1>VIEW DONATIONS</h1>
            </div>
            
                <h2>📚My Donations</h2>
                <div className="section-box">

                
                <div className="my-books">
                   {mydonations.map((item)=>
                    (
                        <div className="mybook-card">

                        <img src={"http://localhost:8080/uploads/"+item.coverImage}
                       
                        />
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                    )
                   )} 
                    
                    
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
                        <button className="description" onClick={()=>setSelectedBook(item)}>Description</button>
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
            {/* ⭐ MODAL */}
            {selectedBook && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{selectedBook.title}</h2>
                        <p>{selectedBook.description}</p>

                        <button className="close-btn" onClick={() => setSelectedBook(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            </>
            )
}
            export default ViewDonation