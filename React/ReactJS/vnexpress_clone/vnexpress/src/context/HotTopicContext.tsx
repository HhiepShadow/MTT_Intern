import { createContext } from "react";
import HotTopicsStore from "../store/HotTopic";
import { HotTopics } from "../utils/HotTopics";

const HotTopicContext = createContext({
  hotTopics: new HotTopicsStore(HotTopics),
});

export const HotTopicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const hotTopicsStore = new HotTopicsStore(HotTopics);

  return (
    <HotTopicContext.Provider value={{ hotTopics: hotTopicsStore }}>
      {children}
    </HotTopicContext.Provider>
  );
};

export default HotTopicContext;
