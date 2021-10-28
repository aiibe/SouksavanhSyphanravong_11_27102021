import { PureComponent } from "react";
import "./css/About.css";
import about from "./about.png";

class About extends PureComponent {
  render() {
    return (
      <>
        <div className="feature">
          <div className="feature__image">
            <img src={about} alt="mountain view" />
          </div>
        </div>
        <div className="about"></div>
      </>
    );
  }
}

export default About;
