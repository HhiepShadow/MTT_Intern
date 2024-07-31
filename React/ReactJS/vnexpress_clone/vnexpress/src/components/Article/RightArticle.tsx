import { Article } from "../../models/Article";

const RightArticle = ({ article }: { article: Article }) => {
  return (
    <div className="right-content-item" key={article.id}>
      <a href="/">
        <img src={article.img} alt="" />
      </a>
      <div className="item-content">
        <h3>
          <a href={`/${article.id}`}>{article.title}</a>
        </h3>
        <p className="time">
          <i className="icon-clock"></i>
          {article.time.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default RightArticle;
