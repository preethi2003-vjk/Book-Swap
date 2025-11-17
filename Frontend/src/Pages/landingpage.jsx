import Navbar from "../Components/navbar"
import Herosection from "../Components/herosection"
import Footer from "../Components/footer"
import "../Styles/landingpage.css"
function Landingpage(){
    return(
    <>
    <div className="landing-page">

    
    <Navbar/>
    <Herosection/>
   
    </div>
      <Footer/>
       
    </>
   
    )
}
export default Landingpage