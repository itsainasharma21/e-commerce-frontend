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
                Nemo enim ipsam voluptatem quia voluptas aspernatur
              </h2>
              <p className="about-description">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="about-text">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <p className="about-text">
                Amet eos ut. Officiis soluta ab id dolor non sint. Corporis
                omnis consequatur quisquam ex consequuntur quo omnis. Quo
                eligendi cum. Amet mollitia qui quidem dolores praesentium quasi
                ut et.
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
                    At vero eos
                  </a>
                </h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat.
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
                    Sed ut perspiciatis
                  </a>
                </h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
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
                    Nemo enim ipsam
                  </a>
                </h3>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam.
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