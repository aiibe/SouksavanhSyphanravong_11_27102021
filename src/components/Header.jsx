import { PureComponent } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../css/Header.css";

class Header extends PureComponent {
  render() {
    return (
      <nav className="container">
        <div>
          <img className="nav__logo" src={logo} alt="Kasa logo" />
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
