import { Header } from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header title="React Router v6" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
