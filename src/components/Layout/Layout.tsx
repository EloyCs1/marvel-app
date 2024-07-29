import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { LayoutProps } from "./types";
import "./styles.scss";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout__content">{children}</div>
    </>
  );
};
export default Layout;
