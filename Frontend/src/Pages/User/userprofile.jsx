import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"
import "../../Styles/userprofile.css"

function Userprofile() {
    const [detailes, setdetailes] = useState()
    // const [isediting, setisediting] = useState(false)

    async function userdata() {
        const response = await instance.get("/user/profile")
        setdetailes(response.data.user)

    }
    // function change(e) {
    //     setdetailes({ ...detailes, [e.target.name]: e.target.value })
    // }

    useEffect(() => {
        userdata()
    }, [])
    // useEffect(() => {

    // }, [detailes])


    return (
        <>
        <div className="user-profile">

        
            <div className="profile-detailes">
                <img src={"http://localhost:8080/uploads/" + detailes?.img}
                    alt="User Profile"
                    className="profile-pic" />
                <h1>{detailes?.fullName}</h1>
                <div className="addcont">
                    
                    <div className="address">
                        <h2>Address detailes</h2>
                        <p>{detailes?.addressLine1},</p>
                        <p>{detailes?.addressLine2},</p>
                        <p>{detailes?.District},</p>
                        <p>{detailes?.State}-{detailes?.pinCode}</p>
                    </div>
                    
                    <div className="contact">
                        <h2>Contact info</h2>
                        <p> ✉️ Email:{detailes?.email}</p>
                        <p>📞 Phone Number:{detailes?.phoneNumber}</p>
                    </div>

                </div>
                <Link to="/user-dash"><button type="button">Back</button></Link>
            

            </div>
           
            </div>
        </>
    )
}
export default Userprofile