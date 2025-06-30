import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/useCart";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header id="header" className="header position-relative">
      <div className="main-header">
        <div className="container-fluid container-xl">
          <div className="d-flex py-3 align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <h1 className="sitename">E-Comm Store</h1>
            </Link>
            <form className="search-form desktop-search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <button className="btn" type="submit">
                  <i className="bi bi-search" />
                </button>
              </div>
            </form>
            <div className="header-actions d-flex align-items-center justify-content-end">
              <button
                className="header-action-btn mobile-search-toggle d-xl-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileSearch"
                aria-expanded="false"
                aria-controls="mobileSearch"
              >
                <i className="bi bi-search" />
              </button>
              <div className="dropdown account-dropdown">
                <Link
                  to="/login"
                  className="header-action-btn"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person" />
                </Link>
              </div>
              <Link to="/cart" className="header-action-btn">
                <i className="bi bi-cart3" />
                <span className="badge">{cartItems.length}</span>
              </Link>
              <i className="mobile-nav-toggle d-xl-none bi bi-list me-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="container-fluid container-xl">
          <div className="position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "none")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "none")}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "none")}
                    to="/collection"
                  >
                    Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "none")}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="collapse" id="mobileSearch">
        <div className="container">
          <form className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <button className="btn" type="submit">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
