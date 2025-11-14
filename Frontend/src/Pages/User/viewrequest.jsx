import { useEffect, useState } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"
import "../../Styles/viewrequest.css"


function ViewRequest() {
    const [reqdetailes, setreqdetailes] = useState([])
    const[detailes,setdetailes]=useState([])
    async function getreqDetailes() {
        const response = await instance.get("/request/view")
        setreqdetailes(response.data)
    }
    async function reqDetailes(){
        const response=await instance.get("/request/receive")
        setdetailes(response.data)
    }
    useEffect(() => {
        getreqDetailes()
        reqDetailes()
    }, [])
    return (
        <>
            <div className="viewrequest">
                <Link to="/user-dash"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>

                <div className="sent-receive">
                    <div className="sent-request">
                        <h1>My Requests</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Book</th>
                                    <th>Date</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            {reqdetailes.map((item) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{item.bookId.title}</td>
                                            <td>{new Date(item.Date).toLocaleDateString()}</td>
                                            <td
                                                className={`badge ${item.status === "Accepted"
                                                    ? "badge-green"
                                                    : item.status === "Rejected"
                                                        ? "badge-red"
                                                        : "badge-orange"
                                                    }`}
                                            >
                                                {item.status === "Accepted" && "✅ "}
                                                {item.status === "Rejected" && "❌ "}
                                                {item.status === "Pending" && "⏳ "}
                                                {item.status}
                                            </td>

                                        </tr>
                                    </tbody>
                                )

                            })}



                        </table>

                    </div>
                    <div className="received-request">
                        <h1>Received Request</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Requester ID</th>
                                    <th>Book Name</th>
                                    <th>Date</th>
                                    <th>Approve✔️</th>
                                    <th>Reject❌</th>
                                </tr>
                            </thead>
                            {detailes.map((item)=>{
                        return(
                            <tbody>
                                <tr>
                                    <td>{item.requesterID.fullName}</td>
                                    <td>{item.bookId.title}</td>
                                    <td>{new Date(item.Date).toLocaleDateString()}</td>
                                    <td><button id="approve">Approve</button></td>
                                    <td><button id="reject">Reject</button></td>
                                </tr>
                            </tbody>
                        )

                    })}

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewRequest