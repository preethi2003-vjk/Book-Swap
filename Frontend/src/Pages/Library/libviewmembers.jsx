import "../../Styles/libmembersview.css"
import instance from "../../utils/apiclient"
import { useState,useEffect } from "react"
import { Link } from "react-router"
function Libmembers(){
    const[members,setmembers]=useState([])
    const[refresh,setrefresh]=useState(false)
    async function getmembersinfo(){
        const response=await instance.get("/library/libmembers")
        setmembers(response.data.members)
    }
   async function removeuser(reqid){
    await instance.patch("/lib_members/reject",{reqid})
    setrefresh(!refresh)
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
    useEffect(()=>{
        getmembersinfo()
    },[refresh])
    return(
        <>
        <div className="libmembers-container">
            <div className="libmem-back-btn">
                <Link to="/libdash"><button>Back</button></Link>
            </div>
            <h1>Library Members</h1>
            <div className="libmembers">
                {members.map((item) => {
                        return (
                            <div className="libmember-card">
                                <img src={"http://localhost:8080/uploads/" + item.UserId.img} />
                                <h3>{item.UserId.fullName}</h3>
                                <p>{getAge(item.UserId.DOB)}years</p>
                                <p>{item.UserId.Gender}</p>

                                <div className="libmember-details">
                                    <p><span>Email:</span> {item.UserId.email}</p>
                                    <p><span>Contact:</span> {item.UserId.phoneNumber}</p>
                                    <p><span>Place:</span>     {item.UserId.District}</p>
                                </div>
                                <button onClick={()=>{removeuser(item._id)}}>Remove</button>
                                {/* {item.Approved?<button className="block-btn" onClick={()=>{blockbtnclick(item._id)}}>Block</button>:<button className="active-btn" onClick={()=>{activebtnclick(item._id)}}>Active</button>}
                                 */}
                            </div>
                        )
                    })}

            </div>
        </div>
        </>
    )
}
export default Libmembers