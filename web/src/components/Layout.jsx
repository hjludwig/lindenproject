import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import "../styles/normalize.css";
import Footer from "./Footer";
import GlobalStyle from "../styles/GlobalStyles";
import Colors from "../styles/colors";
import { IconContext } from "react-icons";

const Layout = ({ children, isHome }) => {
  return (
    <>
      <IconContext.Provider value={{ className: "react-icon" }}>
        <GlobalStyle />
        <Colors />
        <Header isHome={isHome} />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </IconContext.Provider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
