import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router"
import instance from "../../utils/apiclient"
import "../../Styles/viewbookslib.css"
function Viewbookslib(){
    const [data, setdata] = useState([])
    const {id}=useParams()
   


    async function bookview() {
        const response = await instance.get(`/user/view/${id}`)
        setdata(response.data.books)
    }
    useEffect(() => {
        bookview()
    }, [])
    return(
        <>
            <div className="user-lib-bookview">
                <h1>Books View Page</h1>
                
                <div className="userview-lib">
                    <Link to="/userviewlib"><button>Back</button></Link>
                </div>
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
                                <div className="description">
                                    <h5>Descrption:</h5>
                                    <p>{item.description}</p>
                                </div>
                                
                                <button className="lend-btn">Lend</button>
                              
                                





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