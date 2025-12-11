import { Link } from "react-router"
import "../../Styles/liblendedbookinfo.css"
import { useState,useEffect } from "react"
import instance from "../../utils/apiclient"
function ViewlendedDetailes(){
    const[detailes,setdetailes]=useState([])
    async function getlendedinfo(){
        const response=await instance.get("/library/viewlendedinfo")
        setdetailes(response.data.detailes)
    }
    useEffect(()=>{
        getlendedinfo()
    },[])
    return(
        <>
          <div className="lib-lended-view">
                <div className="lended-back-btn">
                    <Link to="/libdash">
                       <button>Back</button>
                    </Link>
                </div>
                 <h1>Book Lended Detailes</h1>
                <div className="lib-lended-detailes">
                   
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Book Title</th>
                                <th>Date of Borrowed</th>
                                <th>Status</th>
                             
                            </tr>
                        </thead>
                        {detailes.map((item) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.UserId.fullName}</td>
                                        <td>{item.BookId.title}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td>{item.status}-({new Date(item.updatedAt).toLocaleDateString()})</td>

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
export default ViewlendedDetailes