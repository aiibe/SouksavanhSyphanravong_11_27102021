import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="container notfound">
        <div className="notfound__message">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className="notfound__redirect" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default NotFound;
