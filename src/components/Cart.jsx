import "../styles/Cart.css";
import { useCart } from "../context/useCart";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price.current,
    0
  );
  
  const tax = subtotal * 0.1; // e.g. 10% tax
  
  const shipping = subtotal ? subtotal > 300 ? 0 : 4.99 : 0;
  const total = subtotal + tax + shipping;

  
  function navigateURL () {
    navigate("/checkout");
  };

  return (
    <div>
      <section id="cart" className="cart section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row g-4">
            <div
              className="col-lg-8 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="cart-items">
                <div className="cart-header d-none d-lg-block">
                  <div className="row align-items-center gy-4">
                    <div className="col-lg-6">
                      <h5>Product</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Price</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Quantity</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Total</h5>
                    </div>
                  </div>
                </div>

                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((product, key) => (
                    <div
                      className="cart-item aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      key={key}
                    >
                      <div className="row align-items-center gy-4" key={key}>
                        <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                          <div className="product-info d-flex align-items-center">
                            <div className="product-image">
                              <img
                                src={product.images.main}
                                alt="Product"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                            <div className="product-details">
                              <h6 className="product-title">{product.title}</h6>
                              <div className="product-meta">
                                <span className="product-color">
                                  Color: Black
                                </span>
                                <span className="product-size">Size: M</span>
                              </div>
                              <button
                                className="remove-item"
                                type="button"
                                onClick={() => removeFromCart(product.id)}
                              >
                                <i className="bi bi-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 text-center">
                          <div className="price-tag">
                            <span className="current-price">
                              ₹{product.price.current.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 text-center">
                          <div className="quantity-selector">
                            <button
                              className="quantity-btn decrease"
                              onClick={() =>
                                updateQuantity(product.id, product.qty - 1)
                              }
                            >
                              <i className="bi bi-dash" />
                            </button>
                            <input
                              type="number"
                              className="quantity-input"
                              defaultValue={1}
                              value={product.qty}
                              min={1}
                              max={10}
                              onChange={(e) =>
                                updateQuantity(
                                  product.id,
                                  parseInt(e.target.value) || 1
                                )
                              }
                            />
                            <button
                              className="quantity-btn increase"
                              onClick={() =>
                                updateQuantity(product.id, product.qty + 1)
                              }
                            >
                              <i className="bi bi-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 text-center mt-3 mt-lg-0">
                          <div className="item-total">
                            <span>
                              ₹
                              {(product.qty * product.price.current).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div className="cart-actions">
                  <div className="row g-3">
                    <div className="col-lg-6 col-md-6">
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={clearCart}
                      >
                        <i className="bi bi-trash" /> Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="cart-summary">
                <h4 className="summary-title">Order Summary</h4>
                <div className="summary-item">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Shipping</span>
                  <span className="summary-value">₹{shipping.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Tax</span>
                  <span className="summary-value">₹{tax.toFixed(2)}</span>
                </div>
                <div className="summary-total">
                  <span className="summary-label">Total</span>
                  <span className="summary-value">₹{total.toFixed(2)}</span>
                </div>
                <div className="checkout-button" onClick={() => navigateURL()}>
                  <a href="#" className="btn btn-accent w-100">
                    Proceed to Checkout <i className="bi bi-arrow-right" />
                  </a>
                </div>
                <div className="continue-shopping">
                  <Link to="/collection" className="btn btn-link w-100">
                    <i className="bi bi-arrow-left" /> Continue Shopping
                  </Link>
                </div>
                <div className="payment-methods">
                  <p className="payment-title">We Accept</p>
                  <div className="payment-icons">
                    <i className="bi bi-credit-card-2-front" />
                    <i className="bi bi-paypal" />
                    <i className="bi bi-wallet2" />
                    <i className="bi bi-apple" />
                    <i className="bi bi-google" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
