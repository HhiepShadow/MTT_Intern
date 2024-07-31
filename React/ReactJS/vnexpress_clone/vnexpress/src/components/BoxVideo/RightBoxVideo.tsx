import { Article } from "../../models/Article";
import RightBoxVideoItem from "./RightBoxVideoItem";

const RightBoxVideo = ({ videoArticles }: { videoArticles: Article[] }) => {
  return (
    <div className="right-box-video-content">
      {videoArticles.map((videoArticle) => (
        <RightBoxVideoItem videoArticle={videoArticle} />
      ))}
    </div>
  );
};

export default RightBoxVideo;
