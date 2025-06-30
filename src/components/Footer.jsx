import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="d-flex justify-content-between gy-4">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-about">
                <Link to="/" className="logo">
                  <span className="sitename">E-Comm Store</span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in nibh vehicula, facilisis magna ut, consectetur
                  lorem.
                </p>
                <div className="footer-contact mt-4">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt" />
                    <span>123 Fashion Street, New York, NY 10001</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope" />
                    <span>hello@example.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4>Download Our App</h4>
                <p>Shop on the go with our mobile app</p>
                <div className="app-buttons">
                  <Link to="#" className="app-btn">
                    <i className="bi bi-apple" />
                    <span>App Store</span>
                  </Link>
                  <Link href="#" className="app-btn">
                    <i className="bi bi-google-play" />
                    <span>Google Play</span>
                  </Link>
                </div>
                <div className="social-links mt-4">
                  <h5>Follow Us</h5>
                  <div className="social-icons">
                    <Link href="#" aria-label="Facebook">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="#" aria-label="TikTok">
                      <i className="bi bi-tiktok" />
                    </Link>
                    <Link href="#" aria-label="Pinterest">
                      <i className="bi bi-pinterest" />
                    </Link>
                    <Link href="#" aria-label="YouTube">
                      <i className="bi bi-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="payment-methods d-flex align-items-center justify-content-center">
            <span>We Accept:</span>
            <div className="payment-icons">
              <i className="bi bi-credit-card" aria-label="Credit Card" />
              <i className="bi bi-paypal" aria-label="PayPal" />
              <i className="bi bi-apple" aria-label="Apple Pay" />
              <i className="bi bi-google" aria-label="Google Pay" />
              <i className="bi bi-shop" aria-label="Shop Pay" />
              <i className="bi bi-cash" aria-label="Cash on Delivery" />
            </div>
          </div>
          <div className="legal-links">
            <Link href="tos.html">Terms of Service</Link>
            <Link href="privacy.html">Privacy Policy</Link>
            <Link href="tos.html">Cookies Settings</Link>
          </div>
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="sitename">E-Comm Store</strong>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;