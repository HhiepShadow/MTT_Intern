import { Article } from "../../models/Article";

const LeftBoxVideo = ({ videoArticle }: { videoArticle: Article }) => {
  return (
    <div className="left-box-video-content">
      <a href={`/${videoArticle.id}`}>
        <img src={videoArticle.img} alt="" />
      </a>
      <h4>
        <a href="/">{videoArticle.title}</a>
      </h4>
      <p className="time">
        <i className="icon-clock"></i>
        {videoArticle.time.toDateString()}
      </p>
      <p className="summary-content">{videoArticle.content}</p>
    </div>
  );
};

export default LeftBoxVideo;
