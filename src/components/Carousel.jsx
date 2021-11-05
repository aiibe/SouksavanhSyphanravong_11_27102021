import { Component } from "react";
import "../css/Carousel.css";

class Carousel extends Component {
  state = {
    current: 0,
  };

  handleNext() {
    this.setState(({ current }) => ({
      current:
        this.state.current === this.props.images.length - 1 ? 0 : current + 1,
    }));
  }

  handlePrevious() {
    this.setState(({ current }) => ({
      current:
        this.state.current === 0 ? this.props.images.length - 1 : current - 1,
    }));
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel__frame">
          <img src={this.props.images[this.state.current]} alt="gallery" />
        </div>

        {this.props.images.length === 1 ? null : (
          <div className="carousel__navigator">
            <div
              className="carousel__previous"
              onClick={this.handlePrevious.bind(this)}
            >
              <svg viewBox="0 0 48 80" fill="#fff">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
              </svg>
            </div>
            <span className="carousel__counter">
              {this.state.current + 1 + "/" + this.props.images.length}
            </span>
            <div
              className="carousel__next"
              onClick={this.handleNext.bind(this)}
            >
              <svg fill="#fff" viewBox="0 0 48 80">
                <path d="m.96 72.346 7.08 7.08 39.6-39.6L8.04.226.96 7.306l32.52 32.52L.96 72.346Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
