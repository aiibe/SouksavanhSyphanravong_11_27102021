import { PureComponent } from "react";
import { withRouter } from "react-router";

import NotFound from "../NotFound";

class Article extends PureComponent {
  render() {
    const { id } = this.props.match.params;
    return id === "susan" ? <p>Page for : {id}</p> : <NotFound />;
  }
}

export default withRouter(Article);
