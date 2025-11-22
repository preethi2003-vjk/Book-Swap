import "../../Styles/adminviewdonations.css"
import AdminSidebar from "../../Components/adminbar"
import instance from "../../utils/apiclient"
import { useState, useEffect } from "react"
function Adminviewdonations() {
    const [detailes, setdetailes] = useState([])
    async function getdonationbooks() {
        const response = await instance.get("/admin/viewdonations")
        setdetailes(response.data.books)
    }
    useEffect(() => {
        getdonationbooks()
    }, [])
    return (
        <>
            <AdminSidebar />
            <div className="viewdonation-container">
                <h1>🤝 User Donations 🎁</h1>

                <div className="view-donations">


                    {detailes.map((item) => {
                        return (
                            <div className="donationbook-card">
                                <img src={"http://localhost:8080/uploads/" +item.coverImage}/>

                                <h4>Title: {item.title}</h4>
                                <p>Author: {item.author}</p>
                                <p>Genre: {item.genere}</p>

                                <h4>Donor Details</h4>
                                <p>Donor: {item.UserID.fullName}</p>
                                <p>Email: {item.UserID.email}</p>
                                <p>Donated On: {new Date (item.createdAt).toLocaleDateString()}</p>
                            </div>
                        )
                    })}




                </div>
            </div>
        </>
    )
}
export default Adminviewdonations