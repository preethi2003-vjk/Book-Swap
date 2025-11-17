import "../Styles/navbar.css"
import { Link } from "react-router"
function Navbar(){
    return(
        <>
         <nav className="navbar">
            <div className="nav-logo">
                 📖BookDonate+
            </div>
            
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="dropdown">
                    <Link>Sign In</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/adminlogin">Admin</Link></li>
                        <li><Link to="/librarylogin">Library</Link></li>
                        <li><Link to="/userlogin">User</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link>Sign Up</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="library-register">Library</Link></li>
                        <li><Link to="user-register">User</Link></li>
                    </ul>
                </li>
                    
            </ul>
            
           
         </nav>
        </>
    )
}
export default Navbar