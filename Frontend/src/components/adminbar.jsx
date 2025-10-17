import "../styles/adminbar.css";

function Adminbar() {
  return (
    <>
      <nav className="admin-navbar">
        <div className="admin-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin"
            className="admin-img"
          />
          <span className="admin-name">Admin Panel</span>
        </div>

        <ul className="admin-nav-links">
          <li>Home</li>
          <li>Users</li>
          <li>Libraries</li>
          <li>Donation List</li>
          <li>
            <button className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Adminbar;
