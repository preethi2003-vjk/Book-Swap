import Librarynavbar from "../../Components/librarynavbar"
import "../../Styles/libdash.css"
import { useEffect,useState } from "react"
import instance from "../../utils/apiclient"
function Librarydash(){
    const[membercount,setmembercount]=useState(0)
    const[bookcount,setbookcount]=useState(0)
    useEffect(()=>{
        async function fetchMemberCount(){
        const response=await instance.get("/library/countmembers")
        setmembercount(response.data)
        }
        async function fetchBookCount(){
            const response=await instance.get("/library/countbooks")
            setbookcount(response.data)
        }
        fetchMemberCount()
        fetchBookCount()

    },[])
    return(
        <>
        <Librarynavbar/>
        <div className="libdashboard">

    <div className="lib-left">
        <img 
            src="https://images-platform.99static.com//BwC3S-3fzGv9AL9dmV6XP-EkD0g=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/137/137628/attachment_137628251"
        />
    </div>

    <div className="lib-right">

        <div className="lib-card">
            <h3>Total Members</h3>
            <p>{membercount?.count}</p>
        </div>

        <div className="lib-card">
            <h3>Total Books</h3>
            <p>{bookcount?.count}</p>
        </div>

        <div className="lib-card">
            <h3>Available Books</h3>
            <p></p>
        </div>

        <div className="lib-card">
            <h3>Borrowed Books</h3>
            <p></p>
        </div>

    </div>
</div>

        </>
    )
}
export default Librarydash