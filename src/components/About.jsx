import "../styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">About</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="about-2" className="about-2 section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <span className="section-badge">
            <i className="bi bi-info-circle" /> About Us
          </span>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="about-title">
                "Where Shopping Meets Happiness"
              </h2>
              <p className="about-description">
                “Welcome to E-Comm Store — your ultimate online shopping destination for fashion, electronics, home essentials, and more. We aim to deliver quality products at unbeatable prices with fast delivery, secure payments, and 24/7 customer support. Shop hassle-free and enjoy an exceptional online shopping experience.”
              </p>
            </div>
            <div className="col-lg-6">
              <p className="about-text">
          
              </p>
            </div>
          </div>
          <div className="row features-boxes gy-4 mt-3">
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="feature-box">
                <div className="icon-box">
                  <i className="bi bi-bullseye" />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    How It Works
                  </a>
                </h3>
                <p>
                  “Browse, add to cart, checkout securely, and get your order delivered right to your doorstep — it’s that simple!”
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="feature-box">
                <div className="icon-box">
                  <i className="bi bi-person-check" />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    User Management
                  </a>
                </h3>
                <p>
                  “Easily manage user profiles, order history, addresses, and preferences for a personalized shopping experience.”
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="feature-box">
                <div className="icon-box">
                  <i className="bi bi-clipboard-data" />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Report Management
                  </a>
                </h3>
                <p>
                  “Track sales, orders, revenue, and customer insights with real-time report management for smarter business decisions.”
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-lg-12 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="video-box">
                <img
                  src="https://templates.simplified.co/thumb/bd80dace-2b68-47c4-bd32-33cd2d4c9c12.jpg"
                  className="img-fluid"
                  alt="Video Thumbnail"
                />
                <a
                  href="https://www.youtube.com/watch?v=RkhrXzlHZyU&ab_channel=BrianLove"
                  className="glightbox pulsating-play-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;