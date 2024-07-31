import Introduction from "../Introduction/Introduction";
import MostQuestions from "../MostQuestions/MostQuestions";
import { QAProvider } from "../../context/QAContext";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import { HotTopicProvider } from "../../context/HotTopicContext";
import HotTopics from "../HotTopics/HotTopics";

const RightSideMainContent = () => {
  return (
    <div className="right-side">
      <Introduction />

      <MostQuestions />

      <a href="#" className="ads-img">
        <img src="/src/images/ads-2.jpg" alt="" className="img-ads" />
      </a>

      <QAProvider>
        <QuestionAnswer />
      </QAProvider>

      <HotTopicProvider>
        <HotTopics />
      </HotTopicProvider>
    </div>
  );
};

export default RightSideMainContent;
