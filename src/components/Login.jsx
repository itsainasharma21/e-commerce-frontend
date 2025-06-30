import { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState("login");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "naina.sharma@imsnoida.com",
        password: "123456",
      }),
    });
    const content = await response.json();
    console.log(content);
  };

  const navigateURL = () => {
    navigate("/admin/dashboard");
  };

  return (
    <>
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">
            {formType == "login" ? "Login" : "Register"}
          </h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">
                {formType == "login" ? "Login" : "Register"}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="login-register" className="login-register section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="login-register-wraper">
                <ul
                  className="nav nav-tabs nav-tabs-bordered justify-content-center mb-4"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        formType == "login" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      data-bs-target="#login-register-login-form"
                      type="button"
                      role="tab"
                      aria-selected="true"
                      onClick={() => setFormType("login")}
                    >
                      <i className="bi bi-box-arrow-in-right me-1" />
                      Login
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        formType == "register" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      data-bs-target="#login-register-registration-form"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                      onClick={() => setFormType("register")}
                    >
                      <i className="bi bi-person-plus me-1" />
                      Register
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  {formType == "login" && (
                    <div
                      className="tab-pane fade show active"
                      id="login-register-login-form"
                      role="tabpanel"
                    >
                      <form>
                        <div className="mb-4">
                          <label
                            htmlFor="login-register-login-email"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="login-register-login-email"
                            required
                            value={"naina.sharma@imsnoida.com"}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="login-register-login-password"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="login-register-login-password"
                            required
                            value={123456}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="login-register-remember-me"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="login-register-remember-me"
                            >
                              Remember me
                            </label>
                          </div>
                          <a href="#" className="forgot-password">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="d-grid">
                          <button
                            type="button"
                            onClick={() => {
                              handleSubmit();
                              navigateURL();
                            }}
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {formType == "register" && (
                    <div id="login-register-registration-form" role="tabpanel">
                      <form>
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <div className="mb-4">
                              <label
                                htmlFor="login-register-reg-firstname"
                                className="form-label"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="login-register-reg-firstname"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-4">
                              <label
                                htmlFor="login-register-reg-lastname"
                                className="form-label"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="login-register-reg-lastname"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-4">
                              <label
                                htmlFor="login-register-reg-email"
                                className="form-label"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="login-register-reg-email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-4">
                              <label
                                htmlFor="login-register-reg-password"
                                className="form-label"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="login-register-reg-password"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-4">
                              <label
                                htmlFor="login-register-reg-confirm-password"
                                className="form-label"
                              >
                                Confirm password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="login-register-reg-confirm-password"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="login-register-terms"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="login-register-terms"
                              >
                                I agree to the <a href="#">Terms of Service</a>{" "}
                                and
                                <a href="#">Privacy Policy</a>
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                Create Account
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
