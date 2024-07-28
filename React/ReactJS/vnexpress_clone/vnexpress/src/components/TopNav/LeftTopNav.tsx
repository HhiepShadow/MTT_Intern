const LeftTopNav = () => {
  const social_links: string[] = [
    "icon-facebook",
    "icon-gplus",
    "icon-twitter",
    "icon-youtube-play",
  ];
  return (
    <div className="social-links">
      {social_links.map((sl) =>
        sl === "icon-gplus" ? (
          <a href="#" className="active">
            <i className={sl}></i>
          </a>
        ) : (
          <a href="#">
            <i className={sl}></i>
          </a>
        )
      )}
    </div>
  );
};

export default LeftTopNav;
