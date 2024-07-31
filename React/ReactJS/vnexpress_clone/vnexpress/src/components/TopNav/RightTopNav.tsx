const RightTopNav = () => {
  const topNavLinks = ["Trang chủ ", "Giới thiệu ", "Liên hệ "];

  return (
    <ul className="right-side-nav">
      {topNavLinks.map((link, id) =>
        id === 0 ? (
          <li className="nav-first-item">
            <a href="/">{link}{" | "}</a>
          </li>
        ) : (
          <li>
              <a href="/">{link}{" | "}</a>
          </li>
        )
      )}
      <li className="nav-last-item">
        <a href="">
          <i className="icon-search"></i>
        </a>
      </li>
    </ul>
  );
};

export default RightTopNav;
