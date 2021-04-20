import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import "../styles/normalize.css";
import Footer from "./Footer";
import GlobalStyle from "../styles/GlobalStyles";
import Colors from "../styles/colors";
import { IconContext } from "react-icons";
import balanceText from "balance-text";

// balanceText();

const Layout = ({ children, isHome }) => {
  // console.log(isHome ? "Home page" : "Some other page");
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
