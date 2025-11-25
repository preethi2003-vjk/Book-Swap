import "../../Styles/libraryaddbooks.css"
import { Link } from "react-router"
import instance from "../../utils/apiclient"
import { useState } from "react"

function Libraryaddbooks() {
    const [data, setdata] = useState({ title: "", author: "", genere: "", publishedYear: "", language: "", description: "" })
    const [pdf, setpdf] = useState(null)
    const [file, setfile] = useState(null)
    function change(e) {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    function uploadpdf(e) {
        setpdf(e.target.files[0])
    }
    function upload(e) {
        setfile(e.target.files[0])
    }
    async function add(e) {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("title", data.title)
            formData.append("author", data.author)
            formData.append("genere", data.genere)
            formData.append("publishedYear", data.publishedYear)

            formData.append("language", data.language)
            formData.append("description", data.description)
            formData.append("pdf", pdf)
            formData.append("pic", file)
            const response = await instance.post("/lib_books/add", formData)
            alert("bookadded")
            navigate("/libviewbooks")
        }
        catch {
            alert("Failed")
        }


    }
    return (
        <>
            <div className="lib-bookcontainer">

                <div className="lib-topbar">
                    <Link to="/libdash">
                        <button className="back-btn">Back</button>
                    </Link>
                </div>
                <h2>Add Book Page</h2>
                <form className="lib-addbook-form">
                    <label htmlFor="title">Book Name:</label>
                    <input type="text" name="title" placeholder="Enter the book name" onChange={change} />
                    <label htmlFor="author">Book Author:</label>
                    <input type="text" name="author" placeholder="Enter the author's full name" onChange={change} />
                    <label htmlFor="genere">Genere:</label>
                    <input type="text" name="genere" placeholder="Enter the book type" onChange={change} />
                    <label htmlFor="publishedYear">Published Year:</label>
                    <input type="number" name="publishedYear" placeholder="Enter the year it was published " onChange={change} />

                    <label htmlFor="language">Book Language:</label>
                    <input type="text" name="language" placeholder="Enter the language book written" onChange={change} />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" placeholder="Write a short description or summary of the book" onChange={change} rows="4" cols="50"></textarea>
                    <label htmlFor="file">Book Pdf:</label>
                    <input type="file" name="file" onChange={uploadpdf} />
                    <label htmlFor="coverImage">Book Cover Image:</label>
                    <input type="file" name="coverImage" onChange={upload} />
                    <button type="submit" onClick={add}>Add</button>
                </form>

            </div>

        </>
    )
}
export default Libraryaddbooks