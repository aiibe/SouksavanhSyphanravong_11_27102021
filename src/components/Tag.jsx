import { PureComponent } from "react";

import "../css/Tag.css";

class Tag extends PureComponent {
  render() {
    return <button className="tag">{this.props.name}</button>;
  }
}

export default Tag;
