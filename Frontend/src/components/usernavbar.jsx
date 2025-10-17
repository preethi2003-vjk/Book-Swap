import "../styles/usernavbar.css"
function Usernavbar(){
    return(
    <>
    
       <nav className="usernav-container">
       <div className="navbar-heading">
          📚 BookSwap
        </div>
      
        <div className="user-nav">
            <ul className="navitem">
                <li>Home</li>
                <li>Libraries</li>
                <li>Books</li>
                <li>Donate</li>
                <li><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg></button></li>
            </ul>

          
        </div>
       </nav>
    </>
    )
}
export default Usernavbar