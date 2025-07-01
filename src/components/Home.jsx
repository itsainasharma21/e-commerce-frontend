import "../styles/Home.css";
import { bestSeller } from "../constant/data";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import toast from 'react-hot-toast';
import glasses from '../assets/glasses.webp'
import hoodie from '../assets/hoodie.webp'
import model from '../assets/model.webp'

const notify = (text) => toast(text);
const Home = () => {
  const { addToCart } = useCart();
  return (
    <>
      <section className="ecommerce-hero-1 hero section" id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 content-col aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <div className="content">
                <span className="promo-badge">New Collection 2025</span>
                <h1>
                  Discover Stylish <span>Fashion</span> For Every Season
                </h1>
                <p>
                  "Step into a world of endless choices! Our E-commerce store brings you trendy fashion, must-have gadgets, and everyday essentials — all at your fingertips. Discover, shop, and smile… because great deals are just a click away!"

                </p>
                <div className="hero-cta">
                  <a href="#" className="btn btn-shop">
                    Shop Now <i className="bi bi-arrow-right" />
                  </a>
                  <a href="#" className="btn btn-collection">
                    View Collection
                  </a>
                </div>
                <div className="hero-features">
                  <div className="feature-item">
                    <i className="bi bi-truck" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-shield-check" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-arrow-repeat" />
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 image-col aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <div className="hero-image">
                <img
                  src={model}
                  alt="Fashion Product"
                  className="main-product"
                  loading="lazy"
                />
                <div
                  className="floating-product product-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <img
                    src={hoodie}
                    alt="Product 2"
                  />
                  <div className="product-info">
                    <h4>Summer Collection</h4>
                    <span className="price">₹89.99</span>
                  </div>
                </div>
                <div
                  className="floating-product product-2 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <img
                    src={glasses}
                    alt="Product 3"
                  />
                  <div className="product-info">
                    <h4>Casual Wear</h4>
                    <span className="price">₹59.99</span>
                  </div>
                </div>
                <div
                  className="discount-badge aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay={500}
                >
                  <span className="percent">30%</span>
                  <span className="text">OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="info-cards" className="info-cards section light-background">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row g-4 justify-content-center">
            <div
              className="col-12 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="info-card text-center">
                <div className="icon-box">
                  <i className="bi bi-truck" />
                </div>
                <h3>Free Shipping</h3>
                <p>
                  “Enjoy free shipping on all orders — shop more, save more, delivered to your doorstep!”
                </p>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="info-card text-center">
                <div className="icon-box">
                  <i className="bi bi-piggy-bank" />
                </div>
                <h3>Money Back Guarantee</h3>
                <p>
                  “Shop with confidence — we offer a 100% money-back guarantee if you’re not satisfied!”
                </p>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="info-card text-center">
                <div className="icon-box">
                  <i className="bi bi-percent" />
                </div>
                <h3>Discount Offers</h3>
                <p>
                  “Grab exciting discount offers and save big on your favorite products — limited time only!”
                </p>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="info-card text-center">
                <div className="icon-box">
                  <i className="bi bi-headset" />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  “We’re here for you 24/7 — anytime, anywhere, with instant support for all your needs!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="best-sellers" className="best-sellers section">
        <div
          className="container section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>Best Sellers</h2>
          <p>
            “Discover our best-selling products loved by thousands — trending, trusted, and top-rated!”
          </p>
        </div>
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row gy-4">
            {bestSeller.length > 0 &&
              bestSeller.map((data, key) => (
                <div
                  className="col-md-6 col-lg-3 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  key={key}
                >
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={data?.images.main}
                        className="img-fluid default-image"
                        alt="Product"
                        loading="lazy"
                      />
                      <img
                        src={data?.images.zoom}
                        className="img-fluid hover-image"
                        alt="Product hover"
                        loading="lazy"
                      />
                      {(data?.new == true || data?.sale == true) && (
                        <div className="product-tags">
                          <span
                            className={`badge ${data?.new == true
                              ? "bg-accent"
                              : data?.sale == true
                                ? "bg-sale"
                                : ""
                              }`}
                          >
                            {data?.new == true
                              ? "New"
                              : data?.sale == true
                                ? "Sale"
                                : ""}
                          </span>
                        </div>
                      )}

                      <div className="product-actions">
                        <button
                          className="btn-wishlist"
                          type="button"
                          aria-label="Add to wishlist"
                        >
                          <i className="bi bi-heart" />
                        </button>
                        <button
                          className="btn-quickview"
                          type="button"
                          aria-label="Quick view"
                        >
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-title">
                        <Link to={"/product-detail/" + data?.id}>
                          {data?.title}
                        </Link>
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          ₹{data?.price.current}
                        </span>
                      </div>
                      <div className="product-rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <span className="rating-count">
                          ({data?.rating.count})
                        </span>
                      </div>
                      <button className="btn btn-add-to-cart" onClick={() => { addToCart(data); notify('Item added to cart!') }}>
                        <i className="bi bi-bag-plus me-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
