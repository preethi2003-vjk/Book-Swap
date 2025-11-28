import "../../Styles/librequests.css"
import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"
function LibRequests() {
    const [request, setrequest] = useState([])
    const [refresh, setrefresh] = useState(false)
    async function getreqdetailes() {
        const response = await instance.get("/lib_members/viewreq")
        setrequest(response.data.librequest)
    }
    function getAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    }
    async function handleApprove(reqid) {
        await instance.patch("/lib_members/approve", { reqid })

        alert("You have Approved")
        setrefresh(!refresh)

    }
    async function handleReject(reqid) {
        await instance.patch("/lib_members/reject", { reqid })
        alert("You have Rejected")
        setrefresh(!refresh)
    }

    useEffect(() => {
        getreqdetailes()
    }, [refresh])
    return (
        <>
            <div className="lib-req-view">
                <div className="req-back-btn">
                    <Link to="/libdash">
                       <button>Back</button>
                    </Link>
                </div>
                 <h1>Received Request</h1>
                <div className="lib-received-req">
                   
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Age</th>
                                <th>Date</th>
                                <th>Approve✔️</th>
                                <th>Reject❌</th>
                            </tr>
                        </thead>
                        {request.map((item) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.UserId.fullName}</td>
                                        <td>{getAge(item.UserId.DOB)}years</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                                        <td>
                                            {item.status !== "Accepted" ? (

                                                <button id="approve" onClick={() => handleApprove(item._id)}>
                                                    Approve
                                                </button>
                                            ) : (
                                                <span >✅Accepetd</span>

                                            )}
                                        </td>
                                        <td>
                                            {item.status !== "Rejected" ? (
                                                <button id="reject" onClick={() => handleReject(item._id)}>
                                                    Reject
                                                </button>
                                            ) : (
                                                <span>❌Rejected</span>
                                            )}
                                        </td>

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
export default LibRequests