import { useContext } from "react";
import { Article } from "../../models/Article";
import ArticleContext from "../../context/ArticleContext";

const LeftArticle = () => {
  const useArticlesStore = useContext(ArticleContext);
  const article: Article = useArticlesStore.articles.getAllArticles.filter(
    (article) => article.content !== ""
  )[0];
  return (
    <div className="datdai-left-content">
      <a href="/">
        <img src={article.img} alt="" />
      </a>
      <h4>
        <a href={`/${article.id}`}>{article.title}</a>
      </h4>
      <p className="time">
        <i className="icon-clock"></i>
        {article.time.toDateString()}
      </p>
      <p className="summary-content">{article.content}</p>
    </div>
  );
};

export default LeftArticle;
