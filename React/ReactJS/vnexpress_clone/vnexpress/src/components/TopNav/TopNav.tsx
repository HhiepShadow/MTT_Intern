import LeftTopNav from "./LeftTopNav";
import RightTopNav from "./RightTopNav";
import "./topnav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="container">
        <div className="main-topnav">
          <LeftTopNav />
          <RightTopNav />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
