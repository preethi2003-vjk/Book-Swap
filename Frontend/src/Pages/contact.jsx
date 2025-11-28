import "../Styles/contact.css";
import { Link } from "react-router";
function Contact() {
    return (
        <>
        <div className="contact-page">
            {/* Back Button */}
                <div className="backs-btn">
                    <Link to="/">
                        <button>⟵ Back</button>
                    </Link>
                </div>

            <h1 className="contact-title">Contact Us</h1>

            <div className="contact-container">

                {/* LEFT SIDE – Contact Info */}
                <div className="contact-info">
                    <h2>Contact info:</h2>

                    <p><strong>Phone No:</strong> +91 98765 43210</p>
                    <p><strong>Email id:</strong> support@bookdonateplus.com</p>
                    <p><strong>Address:</strong>  
                        <br/>BookDonate+ Office,  
                        <br/>MG Road, Coimbatore, Tamil Nadu, India
                    </p>
                </div>

                {/* RIGHT SIDE – Google Map */}
                <div className="contact-map">
                    <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.390590423488!2d76.97875977472013!3d11.016844989141093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b9cd7a0b6f%3A0xb2ff1f908db8b27b!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707903510000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

            </div>

        </div>
        </>
    )
}

export default Contact;
