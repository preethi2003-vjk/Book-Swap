import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router"
import instance from "../../utils/apiclient"
import "../../Styles/viewbookslib.css"
function Viewbookslib() {
    const [data, setdata] = useState([])
    const { id } = useParams()



    async function bookview() {
        const response = await instance.get(`/user/view/${id}`)
        setdata(response.data.books)
    }
    async function handleonclick(bookid) {
        try {
            const response = await instance.post("/lended/record", { bookid, libraryid: id });
            alert(response.data.message);

            // Disable the button immediately for this book
            setdata(prev =>
                prev.map(book =>
                    book._id === bookid ? { ...book, isBorrowed: true } : book
                )
            );
        } catch (err) {
            alert(err.response?.data?.message || "Failed to lend book");
        }




    }
    useEffect(() => {
        bookview()
    }, [])
    return (
        <>
            <div className="user-lib-bookview">
                <h1>Books View Page</h1>


                <Link to="/userviewlib"><button className="user-lib-back">Back</button></Link>

                <div className="user-lib-box">
                    <div className="add-book">
                        {data.map((item) =>
                        (
                            <div className="libbookview-card">

                                <img src={"http://localhost:8080/uploads/" + item.coverImage}

                                />
                                <h3>{item.title}</h3>
                                <p>By</p>
                                <p>{item.author}</p>
                                <p>Published on: {item.publishedYear}</p>
                                <div className="lib-book-description">
                                    <h5>Descrption:</h5>
                                    <p>{item.description}</p>
                                </div>

                                <button
                                    className="lend-btn"
                                    disabled={item.isBorrowed} // disable if already borrowed
                                    onClick={() => handleonclick(item._id)}
                                >
                                    {item.isBorrowed ? "Not Available" : "Lend"}
                                </button>








                            </div>
                        )
                        )}


                    </div>
                </div>

            </div>
        </>
    )
}
export default Viewbookslib