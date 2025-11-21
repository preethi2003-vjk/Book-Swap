import AdminSidebar from "../../Components/adminbar";
import "../../Styles/adminlibraryview.css"
import { useState,useEffect,useRef } from "react";
import instance from "../../utils/apiclient";
function Adminlibraryview(){
       const [detailes, setdetailes] = useState([])
    const[line,setline]=useState("")
    const searchref=useRef()
    async function getlibraryinfo() {
        const response = await instance.get("/admin/viewlibraries"+line)
       
        setdetailes(response.data.libraries)
    }
    function search() {
        setline("?search="+searchref.current.value)
}


    useEffect(() => {
        getlibraryinfo()
    }, [line])
    return(
        <>
        <AdminSidebar/>
        <div className="librarycontainer">
                <h1>Registered Libraries</h1>

                <div className="lib-search-bar">
                    <input type="text" placeholder="Search the user" ref={searchref}/>
                    <button onClick={search}>Search</button>
                </div>
                <div className="libraries">
                    {detailes.map((item) => {
                        return (
                            <div className="library-card">
                                <img src={"http://localhost:8080/uploads/" + item.profilePicture} />
                                <h3>{item.libraryName}</h3>
                                <h4>{item.regNo}</h4>

                                <div className="library-details">
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

                                <button className="lib-remove-btn">Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}
export default Adminlibraryview