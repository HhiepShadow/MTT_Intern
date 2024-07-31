import { useContext } from "react";
import "./footer.css";
import { FooterContext } from "../../context/FooterContext";
import FooterRowItem from "./FooterRowItem";
import { observer } from "mobx-react-lite";

const Footer = observer(() => {
  const useFooterStore = useContext(FooterContext);

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/src/images/footer-logo.png" />
            </div>

            <div className="contact">
              <span>Tòa soạn: Số 60, Dương Đình Nghệ, Cầu Giấy, Hà Nội</span>
              <span>ĐT: 043.123456; Fax: 043.123456</span>
              <span>© chiaseluat giữ bản quyền nội dung trên website này</span>
            </div>
          </div>

          <div className="footer-right">
            <div className="row">
              {useFooterStore.footerItems.footerItems
                .slice(0, 5)
                .map((item) => (
                  <FooterRowItem item={item} />
                ))}
            </div>
            <div className="row second-child">
              {useFooterStore.footerItems.footerItems
                .slice(5, 10)
                .map((item) => (
                  <FooterRowItem item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
