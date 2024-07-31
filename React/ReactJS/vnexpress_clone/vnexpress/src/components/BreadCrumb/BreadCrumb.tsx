import "./bread_crumb.css";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container">
        <a href="/">Trang chủ </a>/ <a href="/"> Thời sự </a>/<span>Mục 1</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
