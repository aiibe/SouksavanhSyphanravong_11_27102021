import { PureComponent } from "react";
import { withRouter } from "react-router";

import NotFound from "./NotFound";

import { findById } from "./utils/query";

class Article extends PureComponent {
  state = {
    article: null,
    fetched: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const found = findById(id);
    this.setState({
      article: found.length === 0 ? null : found[0],
      fetched: true,
    });
  }

  render() {
    const { fetched, article } = this.state;
    return fetched ? (
      article ? (
        <p>This page for ID : {article.id}</p>
      ) : (
        <NotFound />
      )
    ) : (
      <p>Loading...</p>
    );
  }
}

export default withRouter(Article);
