import { Link } from "react-router";
import "../../Styles/viewlendedbooks.css";
import { useState,useEffect } from "react";
import instance from "../../utils/apiclient";
function ViewLendedbooks() {
    const[books,setlendedbooks]=useState([])
    const[refresh,setrefresh]=useState(false)
     const [pdfUrl, setPdfUrl] = useState("");
    const [showModal, setShowModal] = useState(false);
    async function getlendedbooksinfo() {
    const response=await instance.get("/lended/view")
    setlendedbooks(response.data.lendedBooks)
        
    }
    async function handleonclick(bookid){
        await instance.patch("/lended/update",{bookid})
        setrefresh(!refresh)
        alert("Book returned")
    }
    useEffect(()=>{
            getlendedbooksinfo()
           
    },[refresh])
    return (
        <>
            <div className="lended-container">
                     <h2 className="title">Lended Books</h2>
                <div className="top-bar">
                    <Link to="/user-dash">
                        <button className="back-btn">← Back</button>
                    </Link>
                   
                </div>

                <div className="table-wrapper">
                    <table className="lended-table">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Book Author</th>
                                <th>Date Borrowed</th>
                                <th>View PDF</th>
                                <th>Return</th>
                            </tr>
                        </thead>
                       {books.map((item)=>{
                          return(
                            <tbody>
                                <tr>
                                    <td>{item.BookId.title}</td>
                                    <td>{item.BookId.author}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td>
                                         <button
                                    className="lended-pdf-view"
                                    onClick={() => {
                                        setPdfUrl("http://localhost:8080/uploads/" + item.BookId.file);
                                        setShowModal(true);
                                    }}
                                >
                                    View Pdf
                                </button>
                                {showModal && (
                                    <div className="pdf-modal-overlay">
                                        <div className="pdf-modal-box">

                                            <button className="pdf-close-btn" onClick={() => setShowModal(false)}>
                                                ✖
                                            </button>

                                            <iframe
                                                src={pdfUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: "none" }}
                                            ></iframe>

                                        </div>
                                    </div>
                                )}
                                    </td>
                                    <td><button className="lended-btn" onClick={()=>{handleonclick(item.BookId._id)}} >Return</button></td>
                                </tr>
                            </tbody>
                          )
                       })}
                    </table>
                </div>

            </div>
        </>
    );
}

export default ViewLendedbooks;
