import { createContext } from "react";
import TopicNewsStore from "../store/TopicNewsStore";
import { TopicNews } from "../utils/TopicNews";

const TopicNewsContext = createContext({
  topicNews: new TopicNewsStore(TopicNews),
});

export const TopicNewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const topicNewsStore = new TopicNewsStore(TopicNews);

  return (
    <TopicNewsContext.Provider value={{ topicNews: topicNewsStore }}>
      {children}
    </TopicNewsContext.Provider>
  );
};

export default TopicNewsContext;