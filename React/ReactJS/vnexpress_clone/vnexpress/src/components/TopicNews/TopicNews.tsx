import { useContext } from "react";
import "./topic-news.css";
import TopicNewsContext from "../../context/TopicNewsContext";
import { observer } from "mobx-react-lite";
import TopicNewsItem from "./TopicNewsItem";

const TopicNews = observer(() => {
  const useTopicNewsStore = useContext(TopicNewsContext);

  const size = 4;
  const topicNewsList = [];
  for (let i = 0; i < useTopicNewsStore.topicNews.topicNews.length; i += size) {
    topicNewsList.push(useTopicNewsStore.topicNews.topicNews.slice(i, i + size));
  }

  return (
    <div className="topic-news">
      <div className="container">
        {topicNewsList.map((topicNews, index) => (
          <div className="list-topic-news" key={index}>
            {topicNews.map((item) => (
              <TopicNewsItem topicNewsItem={item} key={item.id}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TopicNews;
