import { Link } from "react-router"
import  "../Styles/herosection.css"
function Herosection(){
    return(
        <>
        <div className="herosection">
             <div className="content-sec">
                <h2 class="welcome-heading">
                    <span class="main-text">WELCOME TO BOOKDONATE+!</span><br></br>
                    <span class="sub-text">DONATE YOUR OLD BOOKS</span><br></br>
                    <span class="sub-text">TO EXCITING NEW READS</span>
                </h2>
                <Link to="/user-register"><button >Get Started➠</button></Link>
            </div>
        </div>
          
        </>
    )
}
export default Herosection