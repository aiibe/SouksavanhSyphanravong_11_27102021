import { PureComponent } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../css/Header.css";

class Header extends PureComponent {
  render() {
    return (
      <nav className="container">
        <div>
          <Link to="/">
            <img className="nav__logo" src={logo} alt="Kasa logo" />
          </Link>
        </div>
        <ul className="menu">
          <li className="menu__link">
            <Link to="/">Accueil</Link>
          </li>
          <li className="menu__link">
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Header;
