import { useContext } from "react";
import HotTopicContext from "../../context/HotTopicContext";
import HotTopicItem from "./HotTopicItem";
import { observer } from "mobx-react-lite";

const HotTopics = observer(() => {
  const useHotTopicsStore = useContext(HotTopicContext);
  return (
    <div className="hot-topics">
      <h3 className="hot-topics-header">
        <span>VẤN ĐỀ NÓNG</span>
      </h3>
      <ul>
        {useHotTopicsStore.hotTopics.getAllHotTopics.map((hotTopic) => (
          <HotTopicItem hotTopic={hotTopic} key={hotTopic.id} />
        ))}
      </ul>
    </div>
  );
});

export default HotTopics;
