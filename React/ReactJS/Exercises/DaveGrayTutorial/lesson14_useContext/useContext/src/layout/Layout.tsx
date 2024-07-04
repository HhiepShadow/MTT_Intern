import React, { Dispatch, SetStateAction } from "react";
import { Header } from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = ({
  search,
  setSearch,
  width,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  width: number;
}) => {
  return (
    <div className="App">
      <Header title="React Router v6" width={width} />
      <Navbar search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
