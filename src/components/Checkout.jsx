import "../styles/Checkout.css";
import { useCart } from "../context/useCart";
import { useState } from "react";

const Checkout = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price.current,
    0
  );

  const tax = subtotal * 0.1; // e.g. 10% tax

  const shipping = subtotal ? (subtotal > 300 ? 0 : 4.99) : 0;
  const total = subtotal + tax + shipping;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false)
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || formData.phone.length > 9)
      newErrors.phone = "Valid phone number is required";
    if (!formData.apartment) newErrors.apartment = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "ZIP Code is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.cardNumber || formData.cardNumber.length < 12)
      newErrors.cardNumber = "Valid card number is required";
    // if (!formData.expiry || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiry))
    //   newErrors.expiry = "Expiry must be MM/YY";
    if (!formData.cvv || formData.cvv.length < 3)
      newErrors.cvv = "CVV must be at least 3 digits";
    if (!formData.cardName) newErrors.cardName = "Name on card is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    console.log(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate());
    
    if (validate()) {
      setIsSubmitted(true);
      alert("Order placed successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    validate();
  };

  return (
    <section id="checkout" className="checkout section">
      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="row">
          <div className="col-lg-7">
            <div
              className="checkout-container aos-init aos-animate"
              data-aos="fade-up"
            >
              <form className="checkout-form">
                <div className="checkout-section" id="customer-info">
                  <div className="section-header">
                    <div className="section-number">1</div>
                    <h3>Customer Information</h3>
                  </div>
                  <div className="section-content">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          id="firstName"
                          placeholder="Your First Name"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleChange(e)}
                          disabled={isSubmitted}
                        />
                        {errors.firstName && (
                          <p className="error">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          id="lastName"
                          placeholder="Your Last Name"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleChange(e)}
                          disabled={isSubmitted}
                        />
                        {errors.lastName && (
                          <p className="error">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitted}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitted}
                      />
                      {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                <div className="checkout-section" id="shipping-address">
                  <div className="section-header">
                    <div className="section-number">2</div>
                    <h3>Shipping Address</h3>
                  </div>
                  <div className="section-content">
                    <div className="form-group">
                      <label htmlFor="address">Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="Street Address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apartment">
                        Apartment, Suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="apartment"
                        id="apartment"
                        placeholder="Apartment, Suite, Unit, etc."
                        value={formData.address}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitted}
                      />
                      {errors.address && (
                        <p className="error">{errors.address}</p>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          id="city"
                          placeholder="City"
                          required
                          value={formData.city}
                          onChange={(e) => handleChange(e)}
                          disabled={isSubmitted}
                        />
                        {errors.city && <p className="error">{errors.city}</p>}
                      </div>
                      <div className="col-md-4 form-group">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          id="state"
                          placeholder="State"
                          required
                          value={formData.state}
                          onChange={(e) => handleChange(e)}
                          disabled={isSubmitted}
                        />
                        {errors.state && (
                          <p className="error">{errors.state}</p>
                        )}
                      </div>
                      <div className="col-md-4 form-group">
                        <label htmlFor="zip">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          className="form-control"
                          id="zip"
                          placeholder="ZIP Code"
                          required
                          value={formData.zip}
                          onChange={(e) => handleChange(e)}
                          disabled={isSubmitted}
                        />
                        {errors.zip && <p className="error">{errors.zip}</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select
                        className="form-select"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitted}
                      >
                        <option value>Select Country</option>
                        <option value="US">India</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                      {errors.country && (
                        <p className="error">{errors.country}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="checkout-section" id="payment-method">
                  <div className="section-header">
                    <div className="section-number">3</div>
                    <h3>Payment Method</h3>
                  </div>
                  <div className="section-content">
                    <div className="payment-options">
                      <div className="payment-option active">
                        <input
                          type="radio"
                          name="payment-method"
                          id="credit-card"
                          defaultChecked
                        />
                        <label htmlFor="credit-card">
                          <span className="payment-icon">
                            <i className="bi bi-credit-card-2-front" />
                          </span>
                          <span className="payment-label">
                            Credit / Debit Card
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="payment-details" id="credit-card-details">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <div className="card-number-wrapper">
                          <input
                            type="text"
                            className="form-control"
                            name="cardNumber"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            required
                            value={formData.cardNumber}
                            onChange={(e) => handleChange(e)}
                            disabled={isSubmitted}
                          />

                          <div className="card-icons">
                            <i className="bi bi-credit-card-2-front" />
                            <i className="bi bi-credit-card" />
                          </div>
                        </div>
                        {errors.cardNumber && (
                          <p className="error">{errors.cardNumber}</p>
                        )}
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="expiry">Expiration Date</label>
                          <input
                            type="text"
                            className="form-control"
                            name="expiry"
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            value={formData.expiry}
                            onChange={(e) => handleChange(e)}
                            disabled={isSubmitted}
                          />
                          {errors.expiry && (
                            <p className="error">{errors.expiry}</p>
                          )}
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="cvv">Security Code (CVV)</label>
                          <div className="cvv-wrapper">
                            <input
                              type="text"
                              className="form-control"
                              name="cvv"
                              id="cvv"
                              placeholder={123}
                              required
                              value={formData.cvv}
                              onChange={(e) => handleChange(e)}
                              disabled={isSubmitted}
                            />
                            <span
                              className="cvv-hint"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="3-digit code on the back of your card"
                              data-bs-original-title="3-digit code on the back of your card"
                            >
                              <i className="bi bi-question-circle" />
                            </span>
                          </div>
                          {errors.cvv && <p className="error">{errors.cvv}</p>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardName">Name on Card</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cardName"
                          id="cardName"
                          placeholder="John Doe"
                          required
                          value={formData.cardName}
                          onChange={(e) => handleChange(e)}
                          disabled={isSubmitted}
                        />
                        {errors.cardName && (
                          <p className="error">{errors.cardName}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-section" id="order-review">
                  <div className="section-header">
                    <div className="section-number">4</div>
                    <h3>Review &amp; Place Order</h3>
                  </div>
                  <div className={`section-content`}>
                    <div className={`form-check terms-check ${isSubmitted == true ? 'd-none' : 'show'}`}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        name="terms"
                        required
                        checked={formData.terms}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#termsModal"
                        >
                          Terms and Conditions
                        </a>
                        and
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#privacyModal"
                        >
                          Privacy Policy
                        </a>
                      </label>
                      {errors.terms && <p className="error">{errors.terms}</p>}
                    </div>
                    <div className={`success-message ${isSubmitted === true ? 'show':'d-none'}`}>
                      Your order has been placed successfully! Thank you for
                      your purchase.
                    </div>
                    <div className={`place-order-container ${isSubmitted == true ? 'd-none' : 'show'}`}>
                      <button
                        type="button"
                        className="btn btn-primary place-order-btn"
                        onClick={(e) => handleSubmit(e)}
                      >
                        <span className="btn-text">Place Order</span>
                        <span className="btn-price">₹{total.toFixed(2)}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="order-summary aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <div className="order-summary-header">
                <h3>Order Summary</h3>
                <span className="item-count">{cartItems.length} Items</span>
              </div>
              <div className="order-summary-content">
                <div className="order-items">
                  {cartItems.map((product, key) => (
                    <div className="order-item" key={key}>
                      <div className="order-item-image">
                        <img
                          src={product.images.main}
                          alt="Product"
                          className="img-fluid"
                        />
                      </div>
                      <div className="order-item-details">
                        <h4>{product.title}</h4>
                        <p className="order-item-variant">
                          {product.defaultColor &&
                            `Color: ${product.defaultColor} |`}{" "}
                          {product.defaultSize &&
                            `Size: ${product.defaultSize}`}
                        </p>
                        <div className="order-item-price">
                          <span className="quantity">{product.qty} ×</span>
                          <span className="price">
                            ${product.price.current}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-totals">
                  <div className="order-subtotal d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="order-shipping d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>₹{shipping.toFixed(2)}</span>
                  </div>
                  <div className="order-tax d-flex justify-content-between">
                    <span>Tax</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="order-total d-flex justify-content-between">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="secure-checkout">
                  <div className="secure-checkout-header">
                    <i className="bi bi-shield-lock" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="payment-icons">
                    <i className="bi bi-credit-card-2-front" />
                    <i className="bi bi-credit-card" />
                    <i className="bi bi-paypal" />
                    <i className="bi bi-apple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
