import { Link } from "react-router"
import  "../Styles/herosection.css"
function Herosection(){
    return(
        <>
        <div className="image-sec">
            <img src="https://mandc-bl-assets.s3.amazonaws.com/live/whiteley/2024/04/19172903/Social-e1713790307156.png" alt="" />
            <div className="content-sec">
              <h2 class="welcome-heading">
                <span class="main-text">WELCOME TO BOOKSWAP!</span><br></br>
                <span class="sub-text">SWAP YOUR OLD BOOKS</span><br></br>
                <span class="sub-text">TO EXCITING NEW READS</span>
            </h2>
                <Link to="/user-register"><button >Get Started➠</button></Link>
            </div>
        </div>
        </>
    )
}
export default Herosection