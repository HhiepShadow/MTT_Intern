import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

export const Header = ({ title, width }: { title: string; width: number }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};
