import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Log from "./img3.jpg";
import "./navbar.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navnav">
      <img className="rounded-circle" src={Log} width={100} height={100} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/favorite">
              Favorite Movies
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button type="button" className="btn btn-secondary but">
            Sign Up
          </button>
          <button type="button" className="btn btn-secondary but">
            Sign In
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
