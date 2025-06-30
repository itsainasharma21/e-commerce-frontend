import "../styles/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Contact</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="contact-2" className="contact-2 section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4">
            <div className="col-lg-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-12">
              <form
                action=""
                method="post"
                className="email-form aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
