import './boxvideo.css'

const BoxVideo = () => {
  return (
    <div className="box-video">
      <div className="container">
        <div className="box-video-header">
          <h3>
            <span>VIDEO NỔI BẬT</span>
          </h3>

          <div className="right-box-video-header">
            <button>
              <i className="icon-left-open"></i>
            </button>
            <button>
              <i className="icon-right-open"></i>
            </button>
          </div>
        </div>

        <div className="box-video-content">
          <div className="left-box-video-content">
            <a href="#">
              <img src="/src/images/video-1.png" alt="" />
            </a>
            <h4>
              <a href="#">
                Thủ tướng New Zealand tặng huy hiệu APEC làm quà Giáng sinh
              </a>
            </h4>
            <p className="time">
              <i className="icon-clock"></i>
              Thứ 4,27/12/2017
            </p>
            <p className="summary-content">
              Về vẻ bề ngoài, chè Tân Cương có màu xanh đen, xuăn chặt, cánh chè
              gọn nhỏ, trên bề mặt cánh chè có nhiều phấn trắng. Nước chè rất
              trong, xanh, vàng nhạt, sánh. Nước chè có vị chát ngọt, dễ dịu,
              hài hòa, có hậu, gần như không cảm nhận có vị đắng. Mùi chè thơm
              ngọt, dễ chịu
            </p>
          </div>

          <div className="right-box-video-content">
            <div className="right-content-item">
              <a href="#">
                <img src="/src/images/video-2.png" alt="" />
              </a>
              <div className="item-content">
                <h3>
                  <a href="#">
                    Nga biên chế 3 radar có thể phát hiện tên lửa từ 10000km
                  </a>
                </h3>
              </div>
            </div>
            <div className="right-content-item">
              <a href="#">
                <img src="to/src/images/video-3.png" alt="" />
              </a>
              <div className="item-content">
                <h3>
                  <a href="#">
                    Thượng viện Mỹ thông qua dự luật cải cách thuế lớn nhất 30
                    năm
                  </a>
                </h3>
              </div>
            </div>
            <div className="right-content-item">
              <a href="#">
                <img src="/src/images/video-4.png" alt="" />
              </a>
              <div className="item-content">
                <h3>
                  <a href="#">
                    Chiến dịch dồn ép công tố viên đặc biệt Mueller của Trump
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxVideo