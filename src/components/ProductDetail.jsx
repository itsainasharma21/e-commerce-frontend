import "../styles/ProductDetail.css";
import { useParams } from "react-router-dom";
import { bestSeller, collections } from "../constant/data";
import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import ProductSpecification from "./ProductSpecification";
import { useCart } from "../context/useCart";
import toast from "react-hot-toast";

const notify = (text) => toast(text);
const ProductDetail = () => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const [active, setActive] = useState(0);
  const params = useParams();
  const allProducts = [...bestSeller, ...collections];
  const product = allProducts[Number(params["id"]) - 1];

  const tabs = [
    {
      name: "Description",
      component: ProductDescription,
      isActive: active,
      product: product,
    },
    {
      name: "Specification",
      component: ProductSpecification,
      isActive: active,
      product: product,
    },
    {
      name: "Reviews",
      component: ProductReview,
      isActive: active,
      product: product,
    },
  ];

  const ActiveTabCom = tabs[active].component;

  const cartProduct = cartItems.find((item) => item.id === product.id);
  const quantity = cartProduct?.qty || 1;

  return (
    <div>
      <section id="product-details" className="product-details section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row">
            <div
              className="col-lg-6 mb-5 mb-lg-0 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <div className="product-images">
                <div className="main-image-container mb-3">
                  <div className="image-zoom-container">
                    <img
                      src={product.images.main}
                      alt="Product Image"
                      className="img-fluid main-image drift-zoom"
                      id="main-product-image"
                      data-zoom={product.images.main}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <div className="product-info">
                <div className="product-meta mb-2">
                  <span className="product-category">{product.category}</span>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <span className="rating-count">
                      ({product.rating.count})
                    </span>
                  </div>
                </div>
                <h1 className="product-title">{product.title}</h1>
                <div className="product-price-container mb-4">
                  <span className="current-price">
                    ${product.price.current}
                  </span>
                  <span className="original-price">
                    ${product.price.original}
                  </span>
                  <span className="discount-badge">
                    -{product.price.discountPercent}%
                  </span>
                </div>
                <div className="product-short-description mb-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum at lacus congue, suscipit elit nec, tincidunt
                    orci. Phasellus egestas nisi vitae lectus imperdiet
                    venenatis.
                  </p>
                </div>
                <div className="product-availability mb-4">
                  <i className="bi bi-check-circle-fill text-success" />
                  <span>
                    {product.stock.count > 1 ? "In Stock" : "Sold Out"}
                  </span>
                </div>
                {product.colors.length > 0 ? (
                  <div className="product-colors mb-4">
                    <h6 className="option-title">Color:</h6>
                    <div className="color-options">
                      {product.colors.map((color, key) => (
                        <div
                          key={key}
                          className={`color-option ${
                            product.defaultColor == color.name ? "active" : ""
                          }`}
                          data-color={color.name}
                          style={{ backgroundColor: color.hex }}
                        >
                          <i className="bi bi-check" />
                        </div>
                      ))}
                    </div>
                    <span className="selected-option">Black</span>
                  </div>
                ) : (
                  ""
                )}
                {product.sizes.length > 0 ? (
                  <div className="product-sizes mb-4">
                    <h6 className="option-title">Size:</h6>
                    <div className="size-options">
                      {product.sizes.map((size, key) => (
                        <div
                          className={`size-option ${
                            product.defaultSize == size ? "active" : ""
                          }`}
                          data-size={size}
                          key={key}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="product-quantity mb-4">
                  <h6 className="option-title">Quantity:</h6>
                  <div className="quantity-selector">
                    <button
                      className="quantity-btn decrease"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      <i className="bi bi-dash" />
                    </button>
                    <input
                      type="number"
                      className="quantity-input"
                      value={quantity}
                      min={1}
                      max={24}
                      onChange={(e) =>
                        updateQuantity(
                          product.id,
                          parseInt(e.target.value) || 1
                        )
                      }
                    />
                    <button
                      className="quantity-btn increase"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      <i className="bi bi-plus" />
                    </button>
                  </div>
                </div>
                <div className="product-actions">
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    type="button"
                    onClick={() => {
                      if (!cartProduct) {
                        notify("Item added to cart!");
                        addToCart(product);
                      } else {
                        notify("Item already exist in cart!")
                      }
                    }}
                  >
                    <i className="bi bi-cart-plus" /> Add to Cart
                  </button>
                  <button className="btn btn-outline-primary buy-now-btn">
                    <i className="bi bi-lightning-fill" /> Buy Now
                  </button>
                  <button className="btn btn-outline-secondary wishlist-btn">
                    <i className="bi bi-heart" />
                  </button>
                </div>
                <div className="additional-info mt-4">
                  {product.additionalInfo.map((info, key) => (
                    <div className="info-item" key={key}>
                      <span>{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 aos-init aos-animate" data-aos="fade-up">
            <div className="col-12">
              <div className="product-details-tabs">
                <ul className="nav nav-tabs" id="productTabs" role="tablist">
                  {tabs.map((tab, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={`nav-link ${
                          active == index ? "active" : ""
                        }`}
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                        onClick={() => setActive(index)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content" id="productTabsContent">
                  <ActiveTabCom product={product} isActive={active} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
