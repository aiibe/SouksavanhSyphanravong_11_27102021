import { PureComponent } from "react";
import { Link } from "react-router-dom";

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
      <ul>
        {this.state.articles.map((a) => (
          <li>
            <Link to={`/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Home;
