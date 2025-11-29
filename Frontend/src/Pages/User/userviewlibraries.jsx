import instance from "../../utils/apiclient"
import { useState, useEffect} from "react"
import { Link } from "react-router"
import "../../Styles/viewlibraries.css"
function ViewLibraries() {
    const [data, setdata] = useState([])
    const[detailes,setdetailes]=useState([])
    async function getlibraryinfo() {
        const response = await instance.get("/user/viewlibraries")
        setdata(response.data.Libraries)
    }
    async function getmembershiplibinfo(){
        const response=await instance.get("/user/joinlib")
        console.log(response.data)
        setdetailes(response.data.joinedlibraries)

    }
    async function clickjoin(libraryid){
       
        await instance.post("/lib_members/add",{libraryid})
        const index=data.findIndex((item)=>{
                return item._id===libraryid

        })
        data[index].disabled=true
        setdata([...data])
        alert("Request sended for joining")
       }
  
    useEffect(() => {
        getlibraryinfo()
        getmembershiplibinfo()
    }, [])
    return (
        <>
            <div className="user-librarycontainer">
                <div className="membership-lib">
                     <Link to="/user-dash"><button className="backs-btn">⟵ Back</button></Link>
                    <h1>Your Membership Libraries</h1>
                    <div className="user-libraries">
                    {detailes.map((item) => {
                        return (
                            <div className="user-library-card">
                                <img src={"http://localhost:8080/uploads/" + item.LibraryId.profilePicture} />
                                <h3>{item.LibraryId.libraryName}</h3>
                                <h4>{item.LibraryId.regNo}</h4>

                                <div className="user-library-details">
                                    <p><span>Email:</span> {item.LibraryId.email}</p>
                                    <p><span>Contact:</span> {item.LibraryId.phoneNumber}</p>
                                    <p>
                                        <span>Address:</span>
                                        <br />
                                        {item.LibraryId.addressLine1}, {item.LibraryId.addressLine2}
                                        <br />
                                        {item.LibraryId.District}, {item.LibraryId.State}-{item.LibraryId.pinCode}
                                    </p>
                                </div>
                                <Link to={`/viewlib-books/${item.LibraryId._id}`}><button className="view-btn" >View Books</button></Link>
                                
                            </div>
                        )
                    })}
                </div>

                </div>
                <div className="all-lib">

           
                <h1>All Registered Libraries Section</h1>
               
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
                                <button className={item.disabled?"joinbtn-disabled":"joinbtn-active"} disabled={item.disabled} onClick={()=>{clickjoin(item._id)}} >Join</button>
                            </div>
                        )
                    })}
                </div>
                     </div>
            </div>
        </>
    )
}
export default ViewLibraries