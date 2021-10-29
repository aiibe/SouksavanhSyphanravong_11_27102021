import { PureComponent } from "react";
import { withRouter } from "react-router";
import "./css/Article.css";

import NotFound from "./NotFound";
import Collapse from "./components/Collapse";
import { findById } from "./utils/query";

class Article extends PureComponent {
  state = {
    article: null,
    fetched: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      article: findById(id),
      fetched: true,
    });
  }

  render() {
    const { fetched, article } = this.state;

    if (!fetched) return <p>Loading...</p>;

    if (!article) return <NotFound />;

    return (
      <>
        <div className="article__meta">
          <div>
            <h1 className="article__title">{article.title}</h1>
            <p className="article__location">{article.location}</p>
            <div className="article__tags">
              {article.tags.map((t) => (
                <button key={t} className="article__tag">
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="article__profile">
            <div className="article__host">
              <h3>{article.host.name}</h3>
              <img src={article.host.picture} alt={article.host.name} />
            </div>
            <div className="article__rating">{article.rating + "stars"}</div>
          </div>
        </div>
        <div className="article__details">
          <Collapse
            data={{ title: "Description", text: article.description }}
          />
          <Collapse
            data={{
              title: "Équipements",
              text: article.equipments.join("\n"),
            }}
          />
        </div>
      </>
    );
  }
}

export default withRouter(Article);
