import { PureComponent } from "react";
import "../css/About.css";
import about from "../assets/about.png";

import Collapse from "../components/Collapse";

// Contents in text
import AboutText from "../constants/about";

class About extends PureComponent {
  render() {
    return (
      <>
        <div className="feature">
          <div className="feature__image feature__image--tall">
            <img src={about} alt="mountain view" />
          </div>
        </div>

        <div className="about">
          {AboutText.map((item) => (
            <Collapse title={item.title} text={item.text} key={item.title} />
          ))}
        </div>
      </>
    );
  }
}

export default About;
