import './social.css'

const Social = () => {
  return (
    <div className="social-bar">
      <div className="container">
        <div className="social-main">
          <div className="back-home">
            <a href="#">
              <i className="icon-home"></i> Về trang chủ
            </a>
          </div>

          <div className="social-icons">
            <span>Theo dõi chúng tôi trên: </span>
            <a href="#">
              <i className="icon-facebook-circled"></i>
            </a>
            <a href="#">
              <i className="icon-twitter-circled"></i>
            </a>
            <a href="#">
              <i className="icon-google-plus-circle"></i>
            </a>
            <a href="#">
              <i className="icon-youtube-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social