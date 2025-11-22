import "../../Styles/adminreqview.css"
import instance from "../../utils/apiclient"
import { useState, useEffect } from "react"
import AdminSidebar from "../../Components/adminbar"
function Adminreqview() {
    const[req,setreq]=useState([])
    async function getreqinfo(){
        const response=await instance .get("/admin/viewrequests")
        setreq(response.data.requests)
    }
   
    useEffect(()=>{
            getreqinfo()
    },[])
    return (
        <>
            <AdminSidebar />
            <div className="reqcontainer">
                <h1>Donation Request Dashboard</h1>
                <div className="status-btn">
                    <button className="pending-btn">Pending</button>
                    <button className="accepted-btn" >Accepted</button>
                    <button className="rejected-btn" >Rejected</button>
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