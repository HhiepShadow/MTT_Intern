import { FooterItem } from "../../models/FooterItem";
import "./footer-item.css"

const FooterRowItem = ({ item }: { item: FooterItem }) => {
  return (
    <div className="item">
      <a href="/">{item.title}</a>
      {item.topics.map((it, id) => (
        <a href="/" key={id}>
          {it}
        </a>
      ))}
    </div>
  );
};

export default FooterRowItem;
