import { PureComponent } from "react";
import { withRouter } from "react-router";
import "../css/Article.css";

import NotFound from "./NotFound";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tag from "../components/Tag";

import { findById } from "../utils/query";

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
              {article.tags.map((tag) => (
                <Tag name={tag} key={tag} />
              ))}
            </div>
          </div>

          <div className="article__profile">
            <Rating count={parseInt(article.rating)} />
            <div className="article__host">
              <h3>{article.host.name.replace(" ", "\n")}</h3>
              <img src={article.host.picture} alt={article.host.name} />
            </div>
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
