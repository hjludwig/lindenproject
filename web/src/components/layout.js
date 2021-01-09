import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
// import "./layout.css";
import "../styles/normalize.css";
import "../styles/global.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
