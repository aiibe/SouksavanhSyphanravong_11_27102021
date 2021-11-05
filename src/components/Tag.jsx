import { Component } from "react";

import "../css/Tag.css";

class Tag extends Component {
  render() {
    return <button className="tag">{this.props.name}</button>;
  }
}

export default Tag;
