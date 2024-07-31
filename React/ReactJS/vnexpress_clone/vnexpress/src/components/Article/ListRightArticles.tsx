import { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import RightArticle from "./RightArticle";

const ListRightArticles = () => {
  const useArticlesStore = useContext(ArticleContext);
  return (
    <div className="datdai-right-content">
      {useArticlesStore.articles.getAllArticles.map((article) =>
        article.content === "" ? (
          <RightArticle article={article} key={article.id} />
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default ListRightArticles;
