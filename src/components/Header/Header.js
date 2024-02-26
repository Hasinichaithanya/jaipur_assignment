import { Link } from "react-router-dom";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

class Header extends Component {
  state = {
    menu: false,
  };

  mobileMenu = () => {
    this.setState((prev) => ({ menu: !prev.menu }));
  };

  render() {
    const { menu } = this.state;
    return (
      <>
        <nav className="header-container-desktop">
          <ul className="ul-items-desktop">
            <li>
              <Link to="/home" className="header-heading">
                Home
              </Link>
            </li>
            <li>
              <Link className="header-heading" to="">
                Projects
              </Link>
            </li>

            <Link to="/" className="header-heading">
              <button type="button" className="logout-btn header-heading">
                Logout
              </button>
            </Link>
          </ul>
        </nav>
        <nav className="header-container-mobile">
          <Link to="/">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />{" "}
          </Link>

          <FontAwesomeIcon
            icon={faBars}
            onClick={this.mobileMenu}
            className="menu"
          />
        </nav>
        <div>
          {menu && (
            <ul className="mobile-nav-items">
              <li key="1">
                <Link to="/home" className="header-heading mobile-item">
                  Home
                </Link>
              </li>

              <li key="2">
                <Link className="header-heading mobile-item" to="">
                  Projects
                </Link>
              </li>

              <Link to="/" className="header-heading">
                <button type="button" className="logout-btn header-heading">
                  Logout
                </button>
              </Link>
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Header;
