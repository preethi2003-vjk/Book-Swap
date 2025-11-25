import "../../Styles/adminusersview.css";
import { useState, useEffect,useRef } from "react";
import instance from "../../utils/apiclient";
import AdminSidebar from "../../Components/adminbar";

function Adminusersview() {
    const [detailes, setdetailes] = useState([])
    const[refresh,setrefresh]=useState(false)
    const[line,setline]=useState("")
    const searchref=useRef()
    async function getuserinfo() {
        const response = await instance.get("/admin/viewusers"+line)
        setdetailes(response.data.users)
    }
    function search() {
        setline("?search="+searchref.current.value)
    }
    async function blockbtnclick(userid){
        await instance.patch("/admin/reject",{userid})
        setrefresh(!refresh)
    }
    async function activebtnclick(userid){
          await instance.patch("/admin/active",{userid})
          setrefresh(!refresh)
    }


    useEffect(() => {
        getuserinfo()
    }, [line,refresh])
    return (
        <>
            <AdminSidebar />
            <div className="userscontainer">
                <h1>Registered Users</h1>

                <div className="search-bar">
                    <input type="text" placeholder="Search the user" ref={searchref}/>
                    <button onClick={search}>Search</button>
                </div>
                <div className="users">
                    {detailes.map((item) => {
                        return (
                            <div className="user-card">
                                <img src={"http://localhost:8080/uploads/" + item.img} />
                                <h3>{item.fullName}</h3>

                                <div className="user-details">
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
                                {item.Approved?<button className="block-btn" onClick={()=>{blockbtnclick(item._id)}}>Block</button>:<button className="active-btn" onClick={()=>{activebtnclick(item._id)}}>Active</button>}
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Adminusersview;
