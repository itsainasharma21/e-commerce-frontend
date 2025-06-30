import "../styles/Collection.css";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import { collections } from "../constant/data";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const notify = (text) => toast(text);

const Collection = () => {
  const { addToCart } = useCart();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(collections.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [filteredItems, setFilteredItems] = useState(collections);
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPaginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleCategory = (e) => {
    const keyword = e.target.value.toLowerCase();
    setCurrentPage(1);

    if (keyword === "all") {
      setFilteredItems(collections);
    } else {
      const filtered = collections.filter(
        (item) => item.category.toLowerCase() === keyword
      );
      setFilteredItems(filtered);
    }
  };

  useEffect(() => {}, [filteredItems]);

  return (
    <div>
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Collections</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Collections</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="category-header" className="category-header section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div
            className="filter-container mb-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="row g-3">
              <div className="col-12 col-md-6 col-lg-2">
                <div className="filter-item">
                  <label htmlFor="filterCategory" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="sortBy"
                    onChange={(e) => handleCategory(e, "select")}
                  >
                    <option selected>All</option>
                    <option>Bags</option>
                    <option>Accessories</option>
                    <option>Watches</option>
                    <option>Perfume</option>
                    <option>Skincare</option>
                    <option>Makeup</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section id="category-header" className="category-header section">
              <div
                className="container aos-init aos-animate"
                data-aos="fade-up"
              ></div>
            </section>
            <section
              id="category-product-list"
              className="category-product-list section"
            >
              <div
                className="container aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="row gy-4">
                  {currentItems.length > 0 &&
                    currentItems.map((data, key) => (
                      <div className="col-lg-3" key={key}>
                        <div className="product-box">
                          <div className="product-thumb">
                            <span className="product-label">
                              {data.new == true
                                ? "New"
                                : data.sale == true
                                ? "Sale"
                                : ""}
                            </span>
                            <img
                              src={data.images.main}
                              alt="Product Image"
                              className="main-img"
                              loading="lazy"
                            />
                            <div className="product-overlay">
                              <div className="product-quick-actions">
                                <button
                                  type="button"
                                  className="quick-action-btn"
                                >
                                  <i className="bi bi-heart" />
                                </button>
                                <button
                                  type="button"
                                  className="quick-action-btn"
                                >
                                  <i className="bi bi-arrow-repeat" />
                                </button>
                                <button
                                  type="button"
                                  className="quick-action-btn"
                                >
                                  <i className="bi bi-eye" />
                                </button>
                              </div>
                              <div className="add-to-cart-container">
                                <button
                                  type="button"
                                  className="add-to-cart-btn"
                                  onClick={() => {
                                    addToCart(data);
                                    notify("Item added to cart!");
                                  }}
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-details">
                              <h3 className="product-title">
                                <Link to={"/product-detail/" + data.id}>
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>₹{data.price.current}</span>
                              </div>
                            </div>
                            <div className="product-rating-container">
                              <div className="rating-stars">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star" />
                              </div>
                              <span className="rating-number">
                                {data.rating.count}
                              </span>
                            </div>
                            <div className="product-color-options">
                              {data.colors.map((color, index) => (
                                <span
                                  key={index}
                                  className={`color-option ${
                                    data.defaultColor == color.name
                                      ? "active"
                                      : ""
                                  }`}
                                  style={{ backgroundColor: color.hex }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
            <section
              id="category-pagination"
              className="category-pagination section"
            >
              <div className="container">
                <nav
                  className="d-flex justify-content-center"
                  aria-label="Page navigation"
                >
                  <ul>
                    <li>
                      <a
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                      >
                        <i className="bi bi-arrow-left" />
                        <span className="d-none d-sm-inline">Previous</span>
                      </a>
                    </li>
                    {getPaginationNumbers().map((number) => (
                      <li key={number}>
                        <a
                          className={number === currentPage ? "active" : ""}
                          onClick={() => handlePageChange(number)}
                        >
                          {number}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Next page"
                      >
                        <span className="d-none d-sm-inline">Next</span>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
