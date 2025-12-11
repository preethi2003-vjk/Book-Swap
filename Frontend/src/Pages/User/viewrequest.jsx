import { useEffect, useState } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"
import "../../Styles/viewrequest.css"


function ViewRequest() {
    const [reqdetailes, setreqdetailes] = useState([])
    const [detailes, setdetailes] = useState([])
    async function getreqDetailes() {
        const response = await instance.get("/request/view")
        setreqdetailes(response.data)
    }
    async function reqDetailes() {
        const response = await instance.get("/request/receive")
       
        setdetailes(response.data)
    }
    async function handleApprove(id) {
        try {
            await instance.post("/request/accept", { requestId: id });
            reqDetailes();  
        } catch (e) {
            console.log(e);
        }
    }

    async function handleReject(id) {
        try {
            await instance.post("/request/reject", { requestId: id });
            reqDetailes();  
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getreqDetailes()
        reqDetailes()
    }, [])
    return (
        <>
            <div className="viewrequest">
                <Link to="/user-dash"><button>←Back</button></Link>

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
                                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
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
                            {detailes.map((item) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{item.requesterID.email}</td>
                                            <td>{item.bookId.title}</td>
                                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                {item.status === "Pending" ? (
                                                    <Link to="/acceptrequest">
                                                        <button id="approve" onClick={() => handleApprove(item._id)}>
                                                            Approve
                                                        </button></Link>
                                                ) : item.status === "Accepted" ? (
                                                    <span >✅</span>

                                                ) : null}
                                            </td>
                                            <td>
                                                {item.status === "Pending" ? (
                                                    <button id="reject" onClick={() => handleReject(item._id)}>
                                                        Reject
                                                    </button>
                                                ) : item.status === "Rejected" ? (
                                                    <span>❌</span>
                                                ) : null}
                                            </td>

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