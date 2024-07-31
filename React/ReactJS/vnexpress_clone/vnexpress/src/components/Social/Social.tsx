import "./social.css";

const Social = () => {
  const shareIcons = [
    "icon-facebook-circled",
    "icon-twitter-circled",
    "icon-google-plus-circle",
    "icon-youtube-play",
  ];

  return (
    <div className="social-bar">
      <div className="container">
        <div className="social-main">
          <div className="back-home">
            <a href="/">
              <i className="icon-home"></i> Về trang chủ
            </a>
          </div>
          <div className="social-icons">
            <span>Theo dõi chúng tôi trên: </span>
            {shareIcons.map((icon, id) => (
              <a href="/" key={id}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
