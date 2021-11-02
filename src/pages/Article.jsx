import { PureComponent } from "react";
import { withRouter } from "react-router";
import "../css/Article.css";

import NotFound from "./NotFound";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";

import { findById } from "../utils/query";

class Article extends PureComponent {
  state = {
    article: null,
    fetched: false,
  };

  componentDidMount() {
    /**
     * Get ID params from URL (withRouter)
     * Find article by ID
     */
    const { id } = this.props.match.params;
    this.setState({
      article: findById(id),
      fetched: true,
    });
  }

  render() {
    const { fetched, article } = this.state;

    // Loading indicator. Wait for searching article
    if (!fetched) return <p>Loading...</p>;

    // 404 Article not found
    if (!article) return <NotFound />;

    return (
      <article>
        <Carousel images={article.pictures} />

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
          <Collapse title="Description" text={article.description} />
          <Collapse title="Équipements" text={article.description} />
        </div>
      </article>
    );
  }
}

export default withRouter(Article);
