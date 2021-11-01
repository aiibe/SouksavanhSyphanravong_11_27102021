import { PureComponent } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../logo.svg";
import "../css/Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">
            <img className="nav__logo" src={logo} alt="Kasa logo" />
          </Link>

          <div className="menu">
            <NavLink
              exact
              className="menu__link"
              activeClassName="menu__link--active"
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              exact
              className="menu__link"
              activeClassName="menu__link--active"
              to="/about"
            >
              A Propos
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
