import instance from "../../utils/apiclient"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import "../../Styles/viewlibraries.css"
function ViewLibraries() {
    const [data, setdata] = useState([])
    async function getlibraryinfo() {
        const response = await instance("/user/viewlibraries")
        setdata(response.data.Libraries)
    }
    async function clickjoin(libraryid){
       
                  await instance.post("/lib_members/add",{libraryid})
        alert("Request sended for joining")
       
      

    }
    useEffect(() => {
        getlibraryinfo()
    }, [])
    return (
        <>
            <div className="user-librarycontainer">
                <h1>Join Registered Libraries</h1>
                <Link to="/user-dash"><button className="backs-btn">⟵ Back</button></Link>
                <div className="para">
                    <p>By joining a library, you get access to its entire collection of books, 
                        allowing you to borrow your favorite titles and enjoy reading them within 
                        the specified lending period. Once you become a member, you can easily lend books, 
                        keep them for the allowed time, and return them on orbefore the due date to continue 
                        using the library’s services without interruptions. You can click on "Join" to join any library 
                        that interests you and start exploring its collection right away.</p>
                </div>
                <div className="user-libraries">
                    {data.map((item) => {
                        return (
                            <div className="user-library-card">
                                <img src={"http://localhost:8080/uploads/" + item.profilePicture} />
                                <h3>{item.libraryName}</h3>
                                <h4>{item.regNo}</h4>

                                <div className="user-library-details">
                                    <p><span>Email:</span> {item.email}</p>
                                    <p><span>Contact:</span> {item.phoneNumber}</p>
                                    <p>
                                        <span>Address:</span>
                                        <br />
                                        {item.addressLine1}, {item.addressLine2}
                                        <br />
                                        {item.District}, {item.State}-{item.pinCode}
                                    </p>
                                </div>
                                <button className={item.disabled?"btn-disabled":"btn-active"} onClick={()=>{clickjoin(item._id)}} >Join</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default ViewLibraries