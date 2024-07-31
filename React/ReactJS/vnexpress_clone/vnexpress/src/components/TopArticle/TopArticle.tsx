import { useNavigate } from "react-router-dom";
import { Article } from "../../models/Article";

const TopArticle = ({ article }: { article: Article }) => {
  const splitedArticleContents = article.content.split(/[.!?]+/);
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

  const navigate = useNavigate();
  return (
    <>
      <h3
        onClick={() => navigate(`/${article.id}`)}
        style={{
          cursor: "pointer",
        }}
      >
        {article.title}
      </h3>
      <div className="info">
        <div className="info-left">
          <a href="/" className="link-red">
            <i className="icon-comment red-icon"></i>
            {article.likes}
          </a>
          <a href="/" className="link-red">
            <i className="icon-share red-icon"></i>
            {article.shares}
          </a>
        </div>
        <div className="info-right">
          <span>{article.address}</span>
          <span className="span-grey"> {article.time.toUTCString()}</span>
          <i className="icon-print"></i>
        </div>
      </div>

      <h4 className="title-news">
        Thủ tướng yêu cầu đẩy mạnh xuất khẩu, kiểm soát chặt chẽ nhập khẩu để
        giảm nhập siêu.
      </h4>

      <p className="title-sub-link">
        <a href="/">
          {" "}
          Áp trần lãi suất trong luật Dân sự là 'nhầm lẫn nghiêm trọng'?
        </a>
      </p>

      <div className="news-content">
        <p>{part1}</p>

        <br />
        <p>{part2}</p>

        <br />
        <p>{part3}</p>
      </div>

      <div className="button-more">
        <a href={`/${article.id}`} className="btn-more">
          Xem thêm <i className="icon-down-open"></i>
        </a>
      </div>
    </>
  );
};

export default TopArticle;
