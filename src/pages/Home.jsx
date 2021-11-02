import { PureComponent } from "react";
import Card from "../components/Card";
import "../css/Home.css";
import { findAll } from "../utils/query";
import feature from "../assets/feature.png";

class Home extends PureComponent {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.setState({ articles: [...findAll()] });
  }

  render() {
    return (
      <>
        <div className="feature">
          <div className="feature__image">
            <img src={feature} alt="sea coast" />
          </div>
          <h1 className="feature__title">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="listing">
          {this.state.articles.map((a) => (
            <Card item={a} key={a.id} />
          ))}
        </div>
      </>
    );
  }
}

export default Home;
