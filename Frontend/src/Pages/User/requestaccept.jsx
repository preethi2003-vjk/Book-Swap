import "../../Styles/requestaccept.css"
import { Link } from "react-router"
import { useState ,useEffect} from "react"
import { useNavigate } from "react-router"
import instance from "../../utils/apiclient"
function Requestaccept(){
    const navigate=useNavigate()
    const[detailes,setdetailes]=useState({address:"",date:"",time:""})
    const[data,setdata]=useState([])
    function change(e){
        setdetailes({...detailes,[e.target.name]:e.target.value})
    }
    async function getdata(){
        const response=await instance.get("/request/receive")
        console.log(response.data)
        setdata(response.data)

    }
    useEffect(()=>{
        getdata()
    },[])
    async function send(e){
        e.preventDefault()
         const body = {
      email: data[0]?.requesterID?.email,
      booktitle: data[0]?.bookId?.title,
      address: detailes.address,
      date: detailes.date,
      time: detailes.time,
      requestId:data[0]?._id
    }
        try{
            const reponse=await instance.post("/request/accept",body)
            await instance.patch("/book/updatedonationstatus",{
                bookId:data[0]?.bookId?._id
            })
            alert("Maile sended")
            navigate("/viewrequest")

        }
        catch{
         alert("failed")
    }

        
    }

    return(
        <>
        <div className="requestaccept-page">
         <div className="requestaccept-header">
            <Link to="/viewrequest">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="back-icon"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/></svg>
            </Link> 
         
          
         <h2 className="requestaccept-title">Pickup Detailes</h2>
         </div>
         <form className="requestaccept-form">
            {data.map((item)=>{
                return(
                    <>
                    
                    <label htmlFor="email">EmailTo:</label>
                     <p>{item.requesterID.email}</p>
                      <label htmlFor="booktitle">Book Title</label>
                        <p>{item.bookId.title}</p>
                     </>
                )
            })}
            
           
            <label htmlFor="address">Pickup Address:</label>
            <textarea name="address" id="address" onChange={change}></textarea>
            <label htmlFor="date">Pickup Date:</label>
            <input type="date" name="date" onChange={change}/>
            <label htmlFor="time">Pickup Time:</label>
            <input type="time" name="time" onChange={change}/>
            
            <button type="submit" className="requestaccept-btn" onClick={send}>Send Mail</button>
         </form>
          </div>
        </>
    )
}
export default Requestaccept