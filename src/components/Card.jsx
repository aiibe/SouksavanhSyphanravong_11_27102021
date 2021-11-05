import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Card.css";

class Card extends Component {
  render() {
    const { id, title, cover } = this.props.item;
    return (
      <Link to={`/${id}`} className="listing__link" key={id}>
        <article className="listing__card">
          <div className="listing__image">
            <img src={cover} alt="placeholder" />
          </div>
          <h2 className="listing__title">{title}</h2>
        </article>
      </Link>
    );
  }
}

export default Card;
