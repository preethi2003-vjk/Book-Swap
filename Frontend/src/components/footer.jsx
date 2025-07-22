

import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Get in Touch</h3>
                            <ul>
                                <li><a href="#">Email: bookswap@gmail.com</a></li>
                                <li><a href="#">Contact: +8089788173</a></li>
                                <li><a href="#">Address: 233 Hill Valley, India</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
