import { createContext } from "react";
import TopicsStore from "../store/TopicsStore";
import { initialTopics } from "../utils/Topics";

const TopicContext = createContext({
    topics: new TopicsStore(initialTopics)
});

export const TopicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const topicsStore = new TopicsStore(initialTopics);

    return (
        <TopicContext.Provider value={{topics: topicsStore}}>
            {children}
        </TopicContext.Provider>
    )
}

export default TopicContext;

