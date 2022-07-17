import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { toggelmode } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-dark">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            textDecoration: "none",
            color: "white",
          }}
        >
          Play with Text
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
          </ul>

          {/* <div className="form-check form-switch text-">
            <input
              className="form-check-input"
              onClick={toggelmode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label "
              htmlfor="flexSwitchCheckDefault"
            >
              Dark mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
