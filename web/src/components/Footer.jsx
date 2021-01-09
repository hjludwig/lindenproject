import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <small>© {new Date().getFullYear()}, The Linden Project.</small>
    </footer>
  );
};

export default Footer;
