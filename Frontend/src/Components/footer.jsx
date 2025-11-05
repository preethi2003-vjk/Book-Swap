import "../Styles/footer.css"
import { Link } from "react-router";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="social-links">
          <p>Follow us on</p>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a> | 
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> Facebook</a>
        </div>

        <p className="copyright">© 2025 BookSwap. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
