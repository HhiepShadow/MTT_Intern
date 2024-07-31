import TopArticle from "../TopArticle/TopArticle";
import Share from "../Share/Share";
import { TopicProvider } from "../../context/TopicContext";
import ListTopicBtns from "../ListTopicBtns/ListTopicBtns";
import Articles from "../Article/Articles";
import Comment from "../Comment/Comment";
import { articles } from "../../utils/Articles";
import { ArticleProvider } from "../../context/ArticleContext";

const LeftSideMainContent = () => {
  return (
    <div className="left-side">
      <TopArticle article={articles[articles.length - 5]} />
      <Share />

      <TopicProvider>
        <ListTopicBtns />
      </TopicProvider>
      
      <Comment />

      <ArticleProvider>
        <Articles />
        <Articles />
      </ArticleProvider>
    </div>
  );
};

export default LeftSideMainContent;
