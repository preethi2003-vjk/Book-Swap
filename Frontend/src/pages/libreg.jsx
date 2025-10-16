import Countries from "../components/countries";
import "../styles/libreg.css";
import { Link } from "react-router-dom";
function Libraryregistrationpage() {
  const countries = Countries();

  return (
    <>
      {/* ---------- FORM SECTION ---------- */}
      <Link to="/" id="home"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-store-icon lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></svg></Link>
      <div className="library-register-container">
        <form className="library-form">
          <h1>Library Registration Page</h1>

          <label htmlFor="libname">Library Name</label>
          <input type="text" id="libname" placeholder="Enter Library Name" />

          <label htmlFor="libid">Library ID / Registration Number</label>
          <input type="number" id="libid" placeholder="Enter Library ID" />

          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" placeholder="Enter Email" />

          <label htmlFor="cntno">Contact Number</label>
          <input type="tel" id="cntno" placeholder="Enter Contact Number" />

          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter Address" />

          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Enter City" />

          <label htmlFor="district">District</label>
          <input type="text" id="district" placeholder="Enter District" />

          <label htmlFor="state">State</label>
          <input type="text" id="state" placeholder="Enter State" />

          <label htmlFor="pincode">Pincode</label>
          <input type="text" id="pincode" placeholder="Enter Pincode" />

          <label htmlFor="ctry">Country</label>
          <select id="ctry" name="ctry">
            <option value="">-- Select Country --</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>

      {/* ---------- IMAGE FIXED ON RIGHT SIDE ---------- */}
      <div className="library-image">
        <img
          src="https://t4.ftcdn.net/jpg/05/54/29/51/360_F_554295109_vgOp0gVbh4bu4lztDGAT5Hoe48ceUq4m.jpg"
          alt="Library"
        />
      </div>
    </>
  );
}

export default Libraryregistrationpage;
