import "./header.css";

const Header = ({
  handleNavbar,
  isVisible,
}: {
  handleNavbar: () => void;
  isVisible: boolean;
}) => {
  const images = [
    {
      id: 1,
      src: "/src/images/logo.png",
    },
    {
      id: 2,
      src: "/src/images/ads-1.png",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="main-header">
          <button type="button" id="btn-toggle" onClick={() => handleNavbar()}>
            <i className={isVisible ? "fa fa-times" : "fa fa-bars"}></i>
          </button>

          {images.map((img) => (
            <a href="/" className={`img-${img.id}`} key={img.id}>
              <img src={img.src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
