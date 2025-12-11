import "../../Styles/admindash.css";
import AdminSidebar from "../../Components/adminbar";
import { useState,useEffect } from "react";
import instance from "../../utils/apiclient";
function Admindash() {
    const[approvedusers,setapprovedusers]=useState(0)
    const[approvedlibs,setapprovedlibs]=useState(0)
    const[pendingusers,setpendingusers]=useState(0)
    const[pendinglibs,setpendinglibs]=useState(0)
    const[bookcount,setbookscount]=useState(0)
    async function fetchapprovedusercount(){
        const response=await instance.get("/admin/countapproveduser")
        
        setapprovedusers(response.data)
        
    }
     async function fetchapprovedlibcount(){
        const response=await instance.get("/admin/countapprovedlibraries")
        
        setapprovedlibs(response.data)
        
    }
     async function fetchpendingusercount(){
        const response=await instance.get("/admin/countpendinguser")
        
        setpendingusers(response.data)
        
    }
     async function fetchpendinglibcount(){
        const response=await instance.get("/admin/countpendinglibraries")
        
        setpendinglibs(response.data)
        
    }
    async function fetechbookcount(){
        const response=await instance.get("/admin/bookscount")
        setbookscount(response.data)
    }
    useEffect(()=>{
        fetchapprovedusercount()
        fetchapprovedlibcount()
        fetchpendingusercount()
        fetchpendinglibcount()
        fetechbookcount()
    },[])
    return (
        <>
            <div className="admin-dashboard">

                <AdminSidebar />

                <div className="admin-main">
                    <h2 className="admin-title">Admin Dashboard</h2>

                    <div className="stats-container">

                        <div className="stat-card">
                            <h3>Approved Users</h3>
                            <p>{approvedusers.count_users}</p>
                        </div>

                        <div className="stat-card">
                            <h3>Pending Users</h3>
                            <p>{pendingusers.count_users}</p>
                        </div>

                        <div className="stat-card">
                            <h3>Approved Libraries</h3>
                            <p>{approvedlibs.count_lib}</p>
                        </div>

                        <div className="stat-card">
                            <h3>Pending Libraries</h3>
                            <p>{pendinglibs.count_lib}</p>
                        </div>

                        <div className="stat-card">
                            <h3>Total Books Donated</h3>
                            <p>{bookcount.bookcount}</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Admindash;
