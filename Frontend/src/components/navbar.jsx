import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h1><svg width="120" height="80" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

                    <path d="M12 10h28a4 4 0 014 4v36a4 4 0 01-4 4H12a2 2 0 01-2-2V12a2 2 0 012-2z" fill="#f3e5ab" stroke="#333" stroke-width="2" />
                    <path d="M40 10v40" stroke="#333" stroke-width="2" />
                    <path d="M12 20h28" stroke="#aaa" stroke-width="1" />
                    <path d="M12 30h28" stroke="#aaa" stroke-width="1" />
                    <path d="M12 40h28" stroke="#aaa" stroke-width="1" />


                    <path d="M45 22h10l-3-3m3 3l-3 3" fill="none" stroke="#00b894" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M55 42H45l3 3m-3-3l3-3" fill="none" stroke="#6c63ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    BOOK SWAP</h1>
                <ul className="nav-item d-flex">
                    <li>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store-icon lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></svg>Home</Link>
                    </li>
                    <li>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>About</Link>
                    </li>
                    <li>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-pen-icon lucide-clipboard-pen"><rect width="8" height="4" x="8" y="2" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" /><path d="M4 13.5V6a2 2 0 0 1 2-2h2" /><path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /></svg> Register</Link>
                        <div className="dropdown-menu">
                             <Link className="dropdown-item">User</Link>
                            <Link className="dropdown-item">Library</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>Login</Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item">Admin</Link>
                            <Link className="dropdown-item">User</Link>
                            <Link className="dropdown-item">Library</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navbar