import { PureComponent } from "react";

import "./css/NotFound.css";

class NotFound extends PureComponent {
  render() {
    return (
      <div className="container notfound">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    );
  }
}

export default NotFound;
