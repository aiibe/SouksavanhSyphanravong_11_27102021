import { Component } from "react";
import "../css/Rating.css";

class Rating extends Component {
  render() {
    return (
      <div className="rating article__rating">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i + "-stars"}
            viewBox="0 0 16 16"
            fill={i < this.props.count ? "#FF6060" : "#E3E3E3"}
          >
            <path d="M9.822 6.5 8 .5l-1.822 6H.5l4.635 3.307L3.373 15.5 8 11.982l4.635 3.518-1.762-5.693L15.5 6.5H9.822Z" />
          </svg>
        ))}
      </div>
    );
  }
}

export default Rating;
