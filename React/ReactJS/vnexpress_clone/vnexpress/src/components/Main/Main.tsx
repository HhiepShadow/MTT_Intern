import Banner from "../Banner/Banner";
import MainContent from "../MainContent/MainContent";
import BoxVideo from "../BoxVideo/BoxVideo";
import TopicNews from "../TopicNews/TopicNews";
import { ArticleProvider } from "../../context/ArticleContext";

const Main = () => {
  return (
    <>
      <Banner />
      <MainContent />

      <ArticleProvider>
        <BoxVideo />
      </ArticleProvider>
      <TopicNews />
    </>
  );
};

export default Main;
