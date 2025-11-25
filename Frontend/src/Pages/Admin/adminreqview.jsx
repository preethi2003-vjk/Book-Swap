import "../../Styles/adminreqview.css"
import instance from "../../utils/apiclient"
import { useState, useEffect } from "react"
import AdminSidebar from "../../Components/adminbar"
function Adminreqview() {
    const[req,setreq]=useState([])
    const[click,setclick]=useState(0)
    async function getreqinfo(i){
        let response
        if(i==0){
             response=await instance.get("/admin/viewrequests")
           
        }
        else if(i==1){
             response=await instance.get("/admin/viewreqpending")
           
        }
        else if(i==2){
             response=await instance.get("/admin/viewreqapproved")
           
        }
        else{
             response=await instance.get("/admin/viewreqrejected")
         
        }
         setreq(response.data.requests)
    }
   
    useEffect(()=>{
            getreqinfo(click)
    },[click])
    return (
        <>
            <AdminSidebar />
            <div className="reqcontainer">
                <h1>Donation Request Dashboard</h1>
                <div className="status-btn">
                    <button className="pending-btn" onClick={()=>{setclick(1)}}>Pending</button>
                    <button className="accepted-btn" onClick={()=>{setclick(2)}}>Accepted</button>
                    <button className="rejected-btn" onClick={()=>{setclick(3)}}>Rejected</button>
                </div>
                <div className="req-view">
                    <table className="reqtable">

                        <thead>
                            <tr>
                                <th>Request From</th>
                                <th>Book Title</th>
                                <th>Request To</th>
                                <th>Date of Request</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {req.map((item)=>{
                            return(
                                    <tbody>
                            <tr>
                                <td>{item.requesterID.fullName}</td>
                                <td>{item.bookId.title}</td>
                                <td>{item.donarId.fullName}</td>
                                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                <td className={`badge ${item.status === "Accepted"
                                                    ? "badge-green"
                                                    : item.status === "Rejected"
                                                        ? "badge-red"
                                                        : "badge-orange"
                                                    }`}
                                            >
                                                {item.status === "Accepted" && "✅ "}
                                                {item.status === "Rejected" && "❌ "}
                                                {item.status === "Pending" && "⏳ "}
                                                {item.status}</td>

                            </tr>
                        </tbody>
                            )
                        })}
                        
                    </table>

                </div>


            </div>
        </>
    )
}
export default Adminreqview