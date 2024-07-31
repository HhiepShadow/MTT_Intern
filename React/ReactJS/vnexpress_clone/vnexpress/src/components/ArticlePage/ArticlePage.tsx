import { useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import "./article_page.css";
import HotTopicContext from "../../context/HotTopicContext";
import HotTopicItem from "../HotTopics/HotTopicItem";

const ArticlePage = () => {
  const { id } = useParams();
  const useArticlesStore = useContext(ArticleContext);

  const articleById = useArticlesStore.articles.getAllArticles.filter(
    (article) => article.id === Number(id)
  )[0];

  const splitedArticleContents = articleById.content.split(/[.!?]+/);
  const numSentences = splitedArticleContents.length;
  const part1 = splitedArticleContents
    .slice(0, Math.floor(numSentences / 3))
    .join(".");
  const part2 = splitedArticleContents
    .slice(Math.floor(numSentences / 3), Math.floor((2 * numSentences) / 3))
    .join(".");
  const part3 = splitedArticleContents
    .slice(Math.floor((2 * numSentences) / 3))
    .join(".");

  const useHotTopicsStore = useContext(HotTopicContext);

  return (
    <div>
      <BreadCrumb />
      <div className="article-content">
        <div className="container">
          <h2>{articleById.title}</h2>
          <div className="info">
            <div className="info-left">
              <a href={`/${articleById.id}`} className="link-red">
                <i className="icon-comment red-icon"></i>
                {articleById.likes}
              </a>
              <a href={`/${articleById.id}`} className="link-red">
                <i className="icon-share red-icon"></i>
                {articleById.shares}
              </a>
            </div>
            <div className="info-right">
              <span>{articleById.address}</span>
              <span className="span-grey">
                {" "}
                {articleById.time.toUTCString()}
              </span>
              <i className="icon-print"></i>
            </div>
          </div>
          <h4 className="title-news">
            Thủ tướng yêu cầu đẩy mạnh xuất khẩu, kiểm soát chặt chẽ nhập khẩu
            để giảm nhập siêu.
          </h4>

          <p className="title-sub-link">
            <a href="/">
              {" "}
              Áp trần lãi suất trong luật Dân sự là 'nhầm lẫn nghiêm trọng'?
            </a>
          </p>

          <div className="news-content">
            <p>{part1}</p>
            <img src={articleById.img} className="article-img" />
            <br />
            <p>{part2}</p>

            <br />
            <p>{part3}</p>
          </div>
        </div>
        <div className="hot-topics">
          <div className="container">
            <h3 className="hot-topics-header">
              <span>VẤN ĐỀ NÓNG</span>
            </h3>
            <ul>
              {useHotTopicsStore.hotTopics.getAllHotTopics.map((hotTopic) => (
                <HotTopicItem hotTopic={hotTopic} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
