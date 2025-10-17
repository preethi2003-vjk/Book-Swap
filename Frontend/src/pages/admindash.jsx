import Adminbar from "../components/adminbar"
import "../styles/admindash.css"
function Admindash(){
    return(
        <>
<Adminbar/>
<div className="admin-home-container">
        <h2 className="admin-dashboard-title">Admin Dashboard</h2>

        <div className="admin-cards-container">
          <div className="admin-card">
            <span className="card-icon">📚</span>
            <h3>Total Books</h3>
            <p>Total number of books available or listed.</p>
          </div>

          <div className="admin-card">
            <span className="card-icon">👤</span>
            <h3>Total Users</h3>
            <p>Count of registered users.</p>
          </div>

          <div className="admin-card">
            <span className="card-icon">🏛️</span>
            <h3>Libraries Registered</h3>
            <p>Number of partner or participating libraries.</p>
          </div>

          <div className="admin-card">
            <span className="card-icon">🎁</span>
            <h3>Total Donations</h3>
            <p>Number of donation transactions made.</p>
          </div>

          
        </div>
      </div>
        </>
    )
}
export default Admindash