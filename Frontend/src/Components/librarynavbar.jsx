import { Link } from "react-router"
import "../Styles/librarynavbar.css"
function Librarynavbar(){
    return(
        <>
       <nav className="libnavbar">
            <div className="lib-nav-logo">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvLN0VauZIsm5bgt2WWhz6MC_7wRdT7VlJA&s" alt="" />
            </div>
            
            <ul className="lib-nav-links">
                <li><Link to="/libdash">Home</Link></li>
                <li className="dropdown">
                    <Link>Books</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/lib-addbooks">Add</Link></li>
                        <li><Link to="/libviewbooks">View</Link></li>
                        </ul>
                        </li>
                <li><Link to="/libmembers">Users</Link></li>
                </ul>
                <div className="lib-profile-request">
                    <Link to="/lib-profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></Link>
                    <Link to="/libreq"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/><circle cx="19" cy="6" r="3"/></svg></Link>
                </div>
                 <div className="lib-logout">
                    <Link to="/librarylogin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg></Link>
                 </div>
           
            
           
         </nav>
        </>
    )
}
export default Librarynavbar