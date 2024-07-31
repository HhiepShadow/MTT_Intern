const Share = () => {
  const shareIcons = [
    {
      classNameA: "facebook-icon",
      classNameI: "icon-facebook-circled",
    },
    {
      classNameA: "twitter-icon",
      classNameI: "icon-twitter-circled",
    },
    {
      classNameA: "ggplus-icon",
      classNameI: "icon-google-plus-circle",
    },
  ];
  return (
    <div className="share">
      <div className="left-side-share">
        <span className="share-span">Chia sẻ:</span>
        {shareIcons.map((icon, id) => (
          <a href="/" className={icon.classNameA} key={id}>
            <i className={icon.classNameI}></i>
          </a>
        ))}
      </div>

      <div className="right-side-share">
        <button>
          <i className="icon-bookmark-empty"></i>
        </button>
      </div>
    </div>
  );
};

export default Share;
