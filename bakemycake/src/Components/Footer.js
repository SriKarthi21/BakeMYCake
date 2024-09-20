import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social-media">
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com">
                <i className="bi bi-facebook text-white"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i className="bi bi-instagram text-white"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <i className="bi bi-linkedin text-white"></i>
              </a>
            </li>
          </ul>
          <p> &copy; 2024 BakeMyCake </p>
          <p>All rights  reserved</p>

        </div>
        <div className="footerContact">
          <p>Know Us</p>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>
        <div>
          <p>Need Help</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </>
  )
}

export default Footer;