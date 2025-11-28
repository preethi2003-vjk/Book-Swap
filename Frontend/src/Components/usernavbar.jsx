import "../Styles/usernavbar.css"
import {Link} from "react-router"
function Usernavbar(){
    return(
        <>
        <nav className="usernavbar">
            <div className="user-nav-logo">
               <img src="https://images-platform.99static.com//WAzFi3CYkjf9MmkoQ-EqspbhU0M=/417x373:3120x3076/fit-in/500x500/projects-files/68/6887/688798/be3aab78-057b-4706-bb98-a2bef7b0a82d.jpg" alt="" />
            </div>
            
            <ul className="user-nav-links">
                <li><Link to="/user-dash">Home</Link></li>
                <li className="dropdown">
                    <Link>Donation</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/user-donation">Donate</Link></li>
                        <li><Link to="/viewdonation">View</Link></li>
                        </ul>
                        </li>
                <li><Link to="/userviewlib">Libraries</Link></li>
                </ul>
                <div className="user-profile-request">
                    <Link to="/user-profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></Link>
                    <Link to="/viewrequest"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/><circle cx="19" cy="6" r="3"/></svg></Link>
                </div>
                 <div className="user-logout">
                    <Link to="/userlogin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg></Link>
                 </div>
           
            
           
         </nav>

        </>
    )
}
export default Usernavbar