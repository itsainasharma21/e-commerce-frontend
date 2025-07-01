import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useAdmin } from "../context/useAdmin";

const Header = () => {
  const { cartItems } = useCart();
  const { logoutAdmin } = useAdmin();

  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  const UserHeader = () => {
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
                      className={({ isActive }) =>
                        isActive ? "active" : "none"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "none"
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "none"
                      }
                      to="/collection"
                    >
                      Collection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "none"
                      }
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

  const AdminHeader = () => {
    return (
      <>
        <header id="header" className="header position-relative ">
          <div className="main-header fixed-top bg-white px-4">
            <div className="d-flex py-3 align-items-center justify-content-between">
              <Link className="logo d-flex align-items-center" onClick={logoutAdmin}>
                <h1 className="sitename">E-Comm Store Admin</h1>
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
        </header>
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="bi bi-grid" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Components</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>Alerts</span>
                  </a>
                </li>
                <li>
                  <a href="components-accordion.html">
                    <i className="bi bi-circle" />
                    <span>Accordion</span>
                  </a>
                </li>
                <li>
                  <a href="components-badges.html">
                    <i className="bi bi-circle" />
                    <span>Badges</span>
                  </a>
                </li>
                <li>
                  <a href="components-breadcrumbs.html">
                    <i className="bi bi-circle" />
                    <span>Breadcrumbs</span>
                  </a>
                </li>
                <li>
                  <a href="components-buttons.html">
                    <i className="bi bi-circle" />
                    <span>Buttons</span>
                  </a>
                </li>
                <li>
                  <a href="components-cards.html">
                    <i className="bi bi-circle" />
                    <span>Cards</span>
                  </a>
                </li>
                <li>
                  <a href="components-carousel.html">
                    <i className="bi bi-circle" />
                    <span>Carousel</span>
                  </a>
                </li>
                <li>
                  <a href="components-list-group.html">
                    <i className="bi bi-circle" />
                    <span>List group</span>
                  </a>
                </li>
                <li>
                  <a href="components-modal.html">
                    <i className="bi bi-circle" />
                    <span>Modal</span>
                  </a>
                </li>
                <li>
                  <a href="components-tabs.html">
                    <i className="bi bi-circle" />
                    <span>Tabs</span>
                  </a>
                </li>
                <li>
                  <a href="components-pagination.html">
                    <i className="bi bi-circle" />
                    <span>Pagination</span>
                  </a>
                </li>
                <li>
                  <a href="components-progress.html">
                    <i className="bi bi-circle" />
                    <span>Progress</span>
                  </a>
                </li>
                <li>
                  <a href="components-spinners.html">
                    <i className="bi bi-circle" />
                    <span>Spinners</span>
                  </a>
                </li>
                <li>
                  <a href="components-tooltips.html">
                    <i className="bi bi-circle" />
                    <span>Tooltips</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#forms-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-journal-text" />
                <span>Forms</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="forms-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="forms-elements.html">
                    <i className="bi bi-circle" />
                    <span>Form Elements</span>
                  </a>
                </li>
                <li>
                  <a href="forms-layouts.html">
                    <i className="bi bi-circle" />
                    <span>Form Layouts</span>
                  </a>
                </li>
                <li>
                  <a href="forms-editors.html">
                    <i className="bi bi-circle" />
                    <span>Form Editors</span>
                  </a>
                </li>
                <li>
                  <a href="forms-validation.html">
                    <i className="bi bi-circle" />
                    <span>Form Validation</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#tables-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-layout-text-window-reverse" />
                <span>Tables</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="tables-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="tables-general.html">
                    <i className="bi bi-circle" />
                    <span>General Tables</span>
                  </a>
                </li>
                <li>
                  <a href="tables-data.html">
                    <i className="bi bi-circle" />
                    <span>Data Tables</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#charts-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-bar-chart" />
                <span>Charts</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="charts-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="charts-chartjs.html">
                    <i className="bi bi-circle" />
                    <span>Chart.js</span>
                  </a>
                </li>
                <li>
                  <a href="charts-apexcharts.html">
                    <i className="bi bi-circle" />
                    <span>ApexCharts</span>
                  </a>
                </li>
                <li>
                  <a href="charts-echarts.html">
                    <i className="bi bi-circle" />
                    <span>ECharts</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#icons-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-gem" />
                <span>Icons</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="icons-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="icons-bootstrap.html">
                    <i className="bi bi-circle" />
                    <span>Bootstrap Icons</span>
                  </a>
                </li>
                <li>
                  <a href="icons-remix.html">
                    <i className="bi bi-circle" />
                    <span>Remix Icons</span>
                  </a>
                </li>
                <li>
                  <a href="icons-boxicons.html">
                    <i className="bi bi-circle" />
                    <span>Boxicons</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-heading">Pages</li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-person" />
                <span>Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-faq.html">
                <i className="bi bi-question-circle" />
                <span>F.A.Q</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-contact.html">
                <i className="bi bi-envelope" />
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-register.html">
                <i className="bi bi-card-list" />
                <span>Register</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-login.html">
                <i className="bi bi-box-arrow-in-right" />
                <span>Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-error-404.html">
                <i className="bi bi-dash-circle" />
                <span>Error 404</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-blank.html">
                <i className="bi bi-file-earmark" />
                <span>Blank</span>
              </a>
            </li>
          </ul>
        </aside>
      </>
    );
  };

  return <>{isAdmin == true ? <AdminHeader /> : <UserHeader />}</>;
};

export default Header;
