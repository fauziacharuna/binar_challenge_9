import React from "react";
import "../pages/LandingPage/styles.css";

const Navbar = ({ isFixedTop }) => {
  return (
    <header className={isFixedTop}>
      <div className="container-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand logo">Gemology</span>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse p-2 menu"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#games">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#requirements">
                  Requirements
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="register.html">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
