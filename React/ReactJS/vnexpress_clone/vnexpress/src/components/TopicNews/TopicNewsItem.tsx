import { TopicNewsItemModel } from "../../models/TopicNewsItemModel";

const TopicNewsItem = ({
  topicNewsItem,
}: {
  topicNewsItem: TopicNewsItemModel;
}) => {
  return (
    <div className="topic-news-item">
      <h2 className="topic-news-item-header">
        <span>{topicNewsItem.topic.toUpperCase()}</span>
      </h2>

      <a href="/">
        <img src="/src/images/dansu-copy.png" alt="" />
      </a>
      <div className="topic-news-item-content">
        <h3 className="topic-news-item-title">
          <a href="/">{topicNewsItem.title}</a>
        </h3>

        <ul>
          {topicNewsItem.content.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicNewsItem;
