import { useState } from "react"
import instance from "../../utils/apiclient"
import { useNavigate } from "react-router"
import "../../Styles/userdonation.css"
import { Link } from "react-router"
function Userdonation(){
    const navigate=useNavigate()
    const[data,setdata]=useState({title:"",author:"",genere:"",publishedYear:"",ISBN:"",language:"",description:""})
    const[file,setfile]=useState(null)
    function change(e){
        
        setdata({...data,[e.target.name]:e.target.value})
    }
    function upload(e){
       
        setfile(e.target.files[0])
    }
    async function donate(e){
             e.preventDefault()
            try{
                const formData=new FormData()
                formData.append("title",data.title)
                formData.append("author",data.author)
                formData.append("genere",data.genere)
                formData.append("publishedYear",data.publishedYear)
                formData.append("ISBN",data.ISBN)
                formData.append("language",data.language)
                formData.append("description",data.description)
                formData.append("cover_Image",file)
                const response=await instance.post("/book/add",formData)
                alert("Donation Success")
                navigate("/user-donation")
            }
            catch{
                    alert("Donation Failed")
            }

            
    }
    return(
        <>
          <div className="user-donation">
                <div className="user-dash-link">
                <Link to="/user-dash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
            </div>
            <h1>Donation Page</h1>
            <form className="user-donation-form">
                <label htmlFor="title">Book Name:</label>
                <input type="text" name="title" placeholder="Enter the book name"  onChange={change}/>
                <label htmlFor="author">Book Author:</label>
                <input type="text" name="author" placeholder="Enter the author's full name"onChange={change}/>
                <label htmlFor="genere">Genere:</label>
                <input type="text" name="genere" placeholder="Enter the book type"onChange={change}/>
                <label htmlFor="publishedYear">Published Year:</label>
                <input type="number" name="publishedYear" placeholder="Enter the year it was published "onChange={change}/>
                <label htmlFor="ISBN">ISBN:</label>
                <input type="text"  name="ISBN"placeholder="Enter the ISBN number"onChange={change}/>
                <label htmlFor="language">Book Language:</label>
                <input type="text" name="language" placeholder="Enter the language book written"onChange={change} />
                <label htmlFor="description">Description:</label>
                <textarea name="description" placeholder="Write a short description or summary of the book"onChange={change} rows="4" cols="50"></textarea>
                
                <label htmlFor="coverImage">Book Cover Image:</label>
                <input type="file" name="coverImage" placeholder=""onChange={upload}/>
                <button type="submit" onClick={donate}>Donate</button>
            </form>
          </div>
        </>
    )
}
export default Userdonation