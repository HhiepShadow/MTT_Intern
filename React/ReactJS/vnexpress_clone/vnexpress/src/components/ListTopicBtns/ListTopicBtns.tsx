import { useContext } from "react";
import TopicContext from "../../context/TopicContext";
import TopicBtn from "./TopicBtn";
import { observer } from "mobx-react-lite";

const ListTopicBtns = observer(() => {
  const useTopicsStore = useContext(TopicContext);
  return (
    <div className="list-topics">
      {useTopicsStore.topics.getAllTopics.slice(0, 4).map((topic) => (
        <TopicBtn topic={topic.title} key={topic.id} />
      ))}
    </div>
  );
});

export default ListTopicBtns;
