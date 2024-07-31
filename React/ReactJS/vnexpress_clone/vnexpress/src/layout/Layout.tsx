import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav/TopNav";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { FooterProvider } from "../context/FooterContext";

const Layout = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavbar = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <TopNav />
      <Header handleNavbar={handleNavbar} isVisible={isVisible} />
      <Navbar isVisible={isVisible} />
      <Outlet />
      <Social />
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </>
  );
};

export default Layout;
