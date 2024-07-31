import { Article } from "../../models/Article";

const RightBoxVideoItem = ({ videoArticle }: { videoArticle: Article }) => {
  return (
    <div className="right-content-item">
      <a href={`/${videoArticle.id}`}>
        <img src={videoArticle.img} alt="" />
      </a>
      <div className="item-content">
        <h3>
          <a href="/">
            {videoArticle.title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default RightBoxVideoItem;
