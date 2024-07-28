import "./main-content.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="container">
        <div className="breadcrumb">
          <a href="#">Trang chủ </a>/ <a href="#"> Thời sự </a>/
          <span>Mục 1</span>
        </div>

        <div className="content">
          <div className="left-side">
            <h3>
              Có nên quy định trần lãi suất trong Bộ luật Dân sự (sửa đổi)?
            </h3>
            <div className="info">
              <div className="info-left">
                <a href="#" className="link-red">
                  <i className="icon-comment red-icon"></i>
                  123
                </a>
                <a href="#" className="link-red">
                  <i className="icon-share red-icon"></i>
                  88
                </a>
              </div>
              <div className="info-right">
                <span>Việt Nam </span>
                <span className="span-grey">
                  {" "}
                  Thứ Sáu,30/9/2016 00:06 GMT+7{" "}
                </span>
                <i className="icon-print"></i>
              </div>
            </div>

            <h4 className="title-news">
              Thủ tướng yêu cầu đẩy mạnh xuất khẩu, kiểm soát chặt chẽ nhập khẩu
              để giảm nhập siêu.
            </h4>

            <p className="title-sub-link">
              <a href="#">
                {" "}
                Áp trần lãi suất trong luật Dân sự là 'nhầm lẫn nghiêm trọng'?
              </a>
            </p>

            <div className="news-content">
              <p>
                Tình hình hiện nay đã có thay đổi. Nếu như trước đây, BLHS quy
                định tội cho vay nặng lãi trên cơ sở quy định tại BLDS, thì hiện
                giờ, BLHS đã có quy định riêng về tội này. Chẳng hạn, nếu vay 1
                đồng mà lấy lãi cũng 1 đồng tức là cho vay nặng lãi, hay mức thu
                lãi từ 30 triệu đồng trở lên thì sẽ truy cứu trách nhiệm hình
                sự. Tôi cho là BLHS quy định như vậy là được, song vẫn cần quy
                định thêm ở BLDS bởi nó vô hiệu cho những người bị áp lực phải
                ký những hợp đồng vay quá lớn. Tuy nhiên, loại bỏ chuyện liên
                quan đến khối ngân hàng, nếu BLHS quy định 100% thì BLDS chỉ nên
                quy định 20%, tức giảm 5 lần, song cần phải cân nhắc chỗ này vì
                nó liên quan đến biến động lạm phát. Lạm phát đã 19% rồi thì lãi
                suất 20% là không có gì nhiều.
              </p>

              <br />
              <p>
                Tuy nhiên, nếu vẫn để quy định này tại dự thảo BLDS sửa đổi thì
                thực tế nó vẫn trói buộc hoạt động chuyên môn của các tổ chức
                tín dụng và mâu thuẫn với quy định cho phép tự do thỏa thuận về
                lãi suất của Luật Các tổ chức tín dụng, ông nghĩ sao về vấn đề
                này?
              </p>

              <br />
              <p>
                Đúng như vậy. Cho nên tôi nghĩ là cần cân nhắc không nên quy
                định điều này vào trong BLDS như một điều kiện trói buộc nữa,
                bởi nguyên tắc của một hợp đồng là tự nguyện. Nếu vi phạm một
                điều luật cấm thì hợp đồng đó vô hiệu tuyệt đối. Điều này dẫn
                tới tình trạng khi cần vay sẵn sàng vay với lãi suất cao, nhưng
                đến khi trả nợ lại căn cứ luật để làm vô hiệu hóa hợp đồng vay.
                Do đó, cần phải cân nhắc rất kỹ vấn đề này.
              </p>
            </div>

            <div className="button-more">
              <a href="#" className="btn-more">
                Xem thêm <i className="icon-down-open"></i>
              </a>
            </div>

            <div className="share">
              <div className="left-side-share">
                <span className="share-span">Chia sẻ:</span>
                <a href="#" className="facebook-icon">
                  <i className="icon-facebook-circled"></i>
                </a>
                <a href="#" className="twitter-icon">
                  <i className="icon-twitter-circled"></i>
                </a>
                <a href="#" className="ggplus-icon">
                  <i className="icon-google-plus-circle"></i>
                </a>
              </div>

              <div className="right-side-share">
                <button>
                  <i className="icon-bookmark-empty"></i>
                </button>
              </div>
            </div>

            <div className="list-topics">
              <a href="#" className="btn-topic">
                Bộ tài chính
              </a>
              <a href="#" className="btn-topic">
                Người tiêu dùng
              </a>
              <a href="#" className="btn-topic">
                Bộ tài chính
              </a>
              <a href="#" className="btn-topic">
                Người tiêu dùng
              </a>
            </div>

            <div className="comments">
              <div className="header-cmts">
                <div className="left-cmt">Ý kiến bạn đọc</div>
                <div className="right-cmt">
                  <a href="#" className="newest-cmt">
                    Mới nhất |{" "}
                  </a>
                  <a href="#"> Quan tâm nhất</a>
                </div>
              </div>

              <textarea name="" id="" cols={100} rows={7}>
                Ý kiến
              </textarea>

              <button className="btn-answer">Trả lời</button>
            </div>

            <div className="datdai">
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

              <div className="datdai-content">
                <div className="datdai-left-content">
                  <a href="#">
                    <img src="/src/images/news-dat-dai-1.jpg" alt="" />
                  </a>
                  <h4>
                    <a href="#">
                      Cáo buộc ông Đinh La Thăng khai báo chưa thành khẩn
                    </a>
                  </h4>
                  <p className="time">
                    <i className="icon-clock"></i>
                    Thứ 4,27/12/2017
                  </p>
                  <p className="summary-content">
                    Cơ quan điều tra cáo buộc ông Đinh La Thăng khai báo chưa
                    thành khần, né tránh trách nhiệm, hợp thức tài liệu để đối
                    phó
                  </p>
                </div>

                <div className="datdai-right-content">
                  <div className="right-content-item">
                    <a href="#">
                      <img src="/src/images/news-dat-dai-2.jpg" alt="" />
                    </a>
                    <div className="item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                      <p className="time">
                        <i className="icon-clock"></i>
                        Thứ 4, 27/12/2017
                      </p>
                    </div>
                  </div>

                  <div className="right-content-item">
                    <a href="#">
                      <img src="/src/images/news-dat-dai-3.jpg" alt="" />
                    </a>
                    <div className="item-content">
                      <h3>
                        <a href="#">
                          Người chém tài xế sau vụ cẩu ôtô ở BOT Cai Lậy được
                          trả tự do
                        </a>
                      </h3>
                      <p className="time">
                        <i className="icon-clock"></i>
                        Thứ 4, 27/12/2017
                      </p>
                    </div>
                  </div>
                  <div className="right-content-item">
                    <a href="#">
                      <img src="/src/images/news-dat-dai-4.jpg" alt="" />
                    </a>
                    <div className="item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                      <p className="time">
                        <i className="icon-clock"></i>
                        Thứ 4, 27/12/2017
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="datdai">
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

              <div className="datdai-content">
                <div className="datdai-left-content">
                  <a href="#">
                    <img src="/src/images/news-dat-dai-1.jpg" alt="" />
                  </a>
                  <h4>
                    <a href="#">
                      Cáo buộc ông Đinh La Thăng khai báo chưa thành khẩn
                    </a>
                  </h4>
                  <p className="time">
                    <i className="icon-clock"></i>
                    Thứ 4,27/12/2017
                  </p>
                  <p className="summary-content">
                    Cơ quan điều tra cáo buộc ông Đinh La Thăng khai báo chưa
                    thành khần, né tránh trách nhiệm, hợp thức tài liệu để đối
                    phó
                  </p>
                </div>

                <div className="datdai-right-content">
                  <div className="right-content-item">
                    <a href="#">
                      <img src="/src/images/news-dat-dai-2.jpg" alt="" />
                    </a>
                    <div className="item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                      <p className="time">
                        <i className="icon-clock"></i>
                        Thứ 4, 27/12/2017
                      </p>
                    </div>
                  </div>

                  <div className="right-content-item">
                    <a href="#">
                      <img src="/src/images/news-dat-dai-3.jpg" alt="" />
                    </a>
                    <div className="item-content">
                      <h3>
                        <a href="#">
                          Người chém tài xế sau vụ cẩu ôtô ở BOT Cai Lậy được
                          trả tự do
                        </a>
                      </h3>
                      <p className="time">
                        <i className="icon-clock"></i>
                        Thứ 4, 27/12/2017
                      </p>
                    </div>
                  </div>
                  <div className="right-content-item">
                    <a href="#">
                      <img src="/src/images/news-dat-dai-4.jpg" alt="" />
                    </a>
                    <div className="item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                      <p className="time">
                        <i className="icon-clock"></i>
                        Thứ 4, 27/12/2017
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="intro-box">
              <h3>
                <span>GIỚI THIỆU</span>
              </h3>

              <div className="intro-content">
                là website đầu tiên tại Việt Nam đi sâu vào lĩnh vực xây dựng,
                tập hợp hệ thống văn bản quy phạm pháp luật do nước Cộng hòa xã
                hội chủ nghĩa Việt Nam ban hành từ ngày thành lâp nước (1945)
                đến nay
              </div>
            </div>
            <div className="faq-box">
              <h3>
                <span>HỎI NHIỀU</span>
              </h3>

              <ul>
                <li>
                  <div className="faq-item">
                    <span className="item-index">1</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-index">2</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-index">3</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-index">4</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-index">5</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <a href="#" className="ads-img">
              <img src="/src/images/ads-2.jpg" alt="" className="img-ads" />
            </a>

            <div className="faq-weekly">
              <h3>
                <span>CÂU HỎI TRONG TUẦN</span>
              </h3>
              <ul className="list-faq-weekly">
                <li>
                  <div className="faq-item">
                    <span className="item-number">1</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                      <p>
                        Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                        thường chi phí di chuyển khi Nhà nước thu hồi đất như
                        sau:
                        <button>
                          <i className="icon-down-open"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-number">2</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                      <p>
                        Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                        thường chi phí di chuyển khi Nhà nước thu hồi đất như
                        sau:
                        <button>
                          <i className="icon-down-open"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-number">3</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                      <p>
                        Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                        thường chi phí di chuyển khi Nhà nước thu hồi đất như
                        sau:
                        <button>
                          <i className="icon-down-open"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item">
                    <span className="item-number">4</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                      <p>
                        Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                        thường chi phí di chuyển khi Nhà nước thu hồi đất như
                        sau:
                        <button>
                          <i className="icon-down-open"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="faq-item last-child">
                    <span className="item-number">5</span>
                    <div className="item-content">
                      <h4>
                        <a href="#">
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà
                        </a>
                      </h4>
                      <p>
                        Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                        thường chi phí di chuyển khi Nhà nước thu hồi đất như
                        sau:
                        <button>
                          <i className="icon-down-open"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="hot-topics">
              <h3 className="hot-topics-header">
                <span>VẤN ĐỀ NÓNG</span>
              </h3>

              <ul>
                <li>
                  <div className="hot-topic-item">
                    <a href="#">
                      <img src="/src/images/problem-hot-1.png" alt="" />
                    </a>
                    <div className="hot-topic-item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hot-topic-item">
                    <a href="#">
                      <img src="/src/images/problem-hot-2.png" alt="" />
                    </a>
                    <div className="hot-topic-item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hot-topic-item">
                    <a href="#">
                      <img src="/src/images/problem-hot-3.png" alt="" />
                    </a>
                    <div className="hot-topic-item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hot-topic-item">
                    <a href="#">
                      <img src="/src/images/problem-hot-4.png" alt="" />
                    </a>
                    <div className="hot-topic-item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hot-topic-item">
                    <a href="#">
                      <img src="/src/images/problem-hot-5.png" alt="" />
                    </a>
                    <div className="hot-topic-item-content">
                      <h3>
                        <a href="#">
                          Phó chủ tịch Thanh Hóa không có tên trên lịch công tác
                          sau khi bị kỷ luật
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
