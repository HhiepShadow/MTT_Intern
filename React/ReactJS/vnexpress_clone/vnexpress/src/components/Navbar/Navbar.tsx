import "./navbar.css";
import { navbarItems } from "../../utils/navbarItems";
const Navbar = ({
  isVisible,
}: {
  isVisible: boolean;
}) => {
  return (
    <div className={`navbar ${isVisible ? 'show' : ''}`}>
      <div className="container">
        <ul className="navigation">
          {navbarItems.map((item, id) =>
            item.children !== null ? (
              <li key={id}>
                <a href="/">
                  {item.title} <i className="icon-down-open"></i>
                </a>
                <ul className="sub-nav">
                  {item.children.map((child, i) => (
                    <li key={i}>
                      <a href="/">{child}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={id}>
                <a href="/">{item.title}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
