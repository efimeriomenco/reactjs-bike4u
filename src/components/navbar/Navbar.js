import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-bg-primary" id="navbar-size">
          <Link className="navbar-brand" id="bikeshop-text" to="/">
            BikeShop
          </Link>
            
          <div className="navbar-categories">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/bikes">
                  Bikes <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/information">
                  Information
                </Link>
              </li>
            </ul>
          </div>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              id="submit-search"
              type="button"
            >
              Search
            </button>
          </form>
        </nav>
        <div />
      </header>
    );
  }
}

export default Navbar;
