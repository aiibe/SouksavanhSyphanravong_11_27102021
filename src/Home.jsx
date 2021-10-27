import { PureComponent } from "react";
import Card from "./components/Card";
import "./css/Home.css";

import { findAll } from "./utils/query";

class Home extends PureComponent {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.setState({ articles: findAll() });
  }

  render() {
    return (
      <div className="listing">
        {this.state.articles.map((a) => (
          <Card item={a} key={a.id} />
        ))}
      </div>
    );
  }
}

export default Home;
