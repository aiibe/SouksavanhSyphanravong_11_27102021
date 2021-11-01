import { PureComponent } from "react";
import "../css/Collapse.css";

class Collapse extends PureComponent {
  state = {
    expanded: false,
  };

  toggleContent() {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  render() {
    return (
      <div className="collapse">
        <div className="collapse__head" onClick={this.toggleContent.bind(this)}>
          <h2 className="collapse__title">{this.props.title}</h2>
          <span
            className={
              this.state.expanded
                ? "collapse__toggle collapse__toggle--expand"
                : "collapse__toggle"
            }
          >
            <svg viewBox="0 0 16 10">
              <path
                d="M1.97011 0.992188L0.611694 2.36142L8.20963 9.96911L15.8076 2.35373L14.4492 0.992188L8.20963 7.24604L1.97011 0.992188Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div
          className={
            this.state.expanded ? "collapse__body--expand" : "collapse__body"
          }
        >
          <p className="collapse__text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Collapse;
