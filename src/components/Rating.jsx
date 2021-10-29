import { PureComponent } from "react";

class Rating extends PureComponent {
  render() {
    return (
      <div className="article__rating">
        {[...Array(5)].map((_, i) =>
          i < this.props.count ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M9.822 6.5 8 .5l-1.822 6H.5l4.635 3.307L3.373 15.5 8 11.982l4.635 3.518-1.762-5.693L15.5 6.5H9.822Z"
                fill="#FF6060"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M9.822 6.5 8 .5l-1.822 6H.5l4.635 3.307L3.373 15.5 8 11.982l4.635 3.518-1.762-5.693L15.5 6.5H9.822Z"
                fill="#E3E3E3"
              />
            </svg>
          )
        )}
      </div>
    );
  }
}

export default Rating;
