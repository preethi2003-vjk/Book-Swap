import "../Styles/usernavbar.css"
import {Link} from "react-router"
function Usernavbar(){
    return(
        <>
        <nav className="usernavbar">
            <div className="user-nav-logo">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_VxAvN0GlgunIAAXYNuPxYoyO0uSkrXJcg&s" alt="" />
            </div>
            
            <ul className="user-nav-links">
                <li><Link to="/user-dash">Home</Link></li>
                <li className="dropdown">
                    <Link>Donation</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/user-donation">Donate</Link></li>
                        <li><Link to="/viewdonation/:id">View</Link></li>
                        </ul>
                        </li>
                <li><Link to="libraries">Libraries</Link></li>
                </ul>
                
                <div className="user-profile-logo">
                    <Link to="/user-profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></Link>
                    
                 </div> 
                 <div className="user-logout">
                    <Link to="/userlogin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg></Link>
                 </div>
           
            
           
         </nav>

        </>
    )
}
export default Usernavbar