import { Link } from "react-router";
import "../Styles/adminbar.css";

function AdminSidebar() {
  return (
    <>
      <aside className="admin-sidebar">

        <div className="sidebar-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclEqG2_Yv9C1rWs9oXjhn8wDexbR0mmpuSQ&s"
            alt="Logo"
          />
          <h2>Admin</h2>
        </div>

        <ul className="sidebar-menu">

          <li>
            <Link to="/admindash">
              <span className="icon">🏠</span> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/viewusers">
              <span className="icon">👥</span> Users
            </Link>
          </li>

          <li>
            <Link to="/viewlibraries">
              <span className="icon">🏛️</span> Libraries
            </Link>
          </li>

          <li>
            <Link to="/viewdonations">
              <span className="icon">📚</span> Donations
            </Link>
          </li>

          <li>
            <Link to="/viewapprovals">
              <span className="icon">✔️</span> Approvals
            </Link>
          </li>

          <li>
            <Link to="/viewrequest">
              <span className="icon">📩</span> Requests
            </Link>
          </li>

        </ul>

        <div className="sidebar-logout">
          <Link to="/adminlogin">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
          </Link>
        </div>

      </aside>
    </>
  );
}

export default AdminSidebar;
