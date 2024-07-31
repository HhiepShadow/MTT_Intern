const ArticleHeader = () => {
  return (
    <div className="datdai-header">
      <h3>
        <span>ĐẤT ĐAI</span>
      </h3>
      <div className="right-header">
        <a href="#" className="first-right-header">
          Luật đất đai{" "}
        </a>
        |<a href="#"> Kiện tụng </a>|<a href="#"> Dân sự </a>
        <button>
          <i className="icon-left-open"></i>
        </button>
        <button>
          <i className="icon-right-open"></i>
        </button>
      </div>
    </div>
  );
};

export default ArticleHeader;
