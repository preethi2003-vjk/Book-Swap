import "../../Styles/viewdonation.css"
import { useState,useEffect } from "react"
import instance from "../../utils/apiclient"
import { useParams } from "react-router"
function ViewDonation() {
    const[mydonations,setmydonations]=useState({})
    const { id } = useParams()
    
    // const[otherdonations,setotherDonations]=useState()
    async function fetchDonations(){
        console.log(id)
        const response=await instance.get("/book/view/"+id)
        setmydonations(response.data.books)
    }
    useEffect(()=>{
        fetchDonations()
    },[])
    return (
        <>
            <div className="view-donation-books">
                <h1>VIEW DONATIONS</h1>
                <h2>📚My Donations</h2>
                <div className="my-books">

                    <div className="mybook-card">
                        <img src={`http://localhost:8080/uploads/${mydonations.coverImage}`}
                       
                        />
                        <h3>{mydonations?.title}</h3>
                        <p>{mydonations?.author}</p>
                        <p>date of donation</p>
                    </div>
                    
                </div>
                <h2>🤝Book Donated By Others</h2>
                <div className="others-books">


                    <div className="mybook-card">
                        <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63e004cebb978e001e37d1e6.jpg" alt="" />
                        <h3>Book Name</h3>
                        <p>Author</p>
                        <p>date of donation</p>
                    </div>

                </div>
            </div>
            </>
            )
}
            export default ViewDonation