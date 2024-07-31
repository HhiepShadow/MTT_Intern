import ArticleHeader from "./ArticleHeader";
import LeftArticle from "./LeftArticle";
import ListRightArticles from "./ListRightArticles";

const Articles = () => {
  return (
    <div className="datdai">
      <ArticleHeader />
      <div className="datdai-content">
        <LeftArticle />
        <ListRightArticles />
      </div>
    </div>
  );
};

export default Articles;
