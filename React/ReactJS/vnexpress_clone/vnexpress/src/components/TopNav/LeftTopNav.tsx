const LeftTopNav = () => {
  const social_links: string[] = [
    "icon-facebook",
    "icon-gplus",
    "icon-twitter",
    "icon-youtube-play",
  ];
  return (
    <div className="social-links">
      {social_links.map((sl, id) =>
        sl === "icon-gplus" ? (
          <a href="/" className="active" key={id}>
            <i className={sl}></i>
          </a>
        ) : (
          <a href="/" key={id}>
            <i className={sl}></i>
          </a>
        )
      )}
    </div>
  );
};

export default LeftTopNav;
