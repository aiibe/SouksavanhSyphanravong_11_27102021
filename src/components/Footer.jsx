import { PureComponent } from "react";

import "../css/Footer.css";
import logo from "../logo_white.svg";

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <img className="footer__logo" src={logo} alt="Kasa logo white" />
        <p>
          <span>© 2020 Kasa. All rights reserved</span>
        </p>
      </footer>
    );
  }
}

export default Footer;
