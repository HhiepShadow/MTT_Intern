import BreadCrumb from "../BreadCrumb/BreadCrumb";
import LeftSideMainContent from "./LeftSideMainContent";
import "./main-content.css";
import RightSideMainContent from "./RightSideMainContent";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="container">
        <BreadCrumb />
        <div className="content">
          <LeftSideMainContent />
          <RightSideMainContent />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
