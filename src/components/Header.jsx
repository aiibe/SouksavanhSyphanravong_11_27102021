import { PureComponent } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../css/Header.css";

class Header extends PureComponent {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">
            <img className="nav__logo" src={logo} alt="Kasa logo" />
          </Link>
        </div>

        <div className="menu">
          <Link className="menu__link" to="/">
            Accueil
          </Link>
          <Link className="menu__link" to="/about">
            A Propos
          </Link>
        </div>
      </nav>
    );
  }
}
export default Header;
