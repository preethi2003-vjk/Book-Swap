import React from 'react'
import "../styles/contact.css"
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <>
            <Navbar />
            <div className='contact-container'>
                <div className='card contact'>
                    <div className='card-body contact-body'>
                        <h2 className='card-header'>📬 Contact Us</h2>
                        <h3>📍 Our Address</h3>
                        <p>BookSwap Headquarters<br />123 Library Lane,Seoul</p>
                        <h3>📞 Phone</h3>
                        <p>+91 9876543210</p>

                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg> Email</h3>
                        <p>chaegswap@gmail.com</p>
                          <h3>🔗 Follow us</h3>
                        <h4><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> https://instagram.com/bookswap_off</Link></h4>
                        <h4><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> https://facebook.com/bookswapindia</Link></h4>
                    </div>
                  
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.91416411486!2d126.80932480062633!3d37.565033716054465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sin!4v1753272750742!5m2!1sen!2sin"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map"
></iframe>

                   
                </div>
            </div>

        </>

    )
}
export default Contact
