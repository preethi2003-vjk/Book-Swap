import "../../Styles/libraryviewbooks.css"
import instance from "../../utils/apiclient"
import { useState, useEffect } from "react"
import { Link } from "react-router"
function Libraryviewbooks() {
    const [data, setdata] = useState([])
    const [pdfUrl, setPdfUrl] = useState("");
    const [showModal, setShowModal] = useState(false);


    async function bookview() {
        const response = await instance.get("/lib_books/view")
        setdata(response.data)
    }
    useEffect(() => {
        bookview()
    }, [])
    return (
        <>
            <div className="lib-bookview">
                <h1>Books View Page</h1>
                <div className="lib-dash">
                    <Link to="/libdash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>
                </div>
                <div className="lib-box">
                    <div className="add-books">
                        {data.map((item) =>
                        (
                            <div className="bookview-card">

                                <img src={"http://localhost:8080/uploads/" + item.coverImage}

                                />
                                <h3>{item.title}</h3>
                                <p>{item.author}</p>
                                <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                                <button
                                    className="lib-pdf-view"
                                    onClick={() => {
                                        setPdfUrl("http://localhost:8080/uploads/" + item.file);
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






                            </div>
                        )
                        )}


                    </div>
                </div>

            </div>
        </>
    )
}
export default Libraryviewbooks