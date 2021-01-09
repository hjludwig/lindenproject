import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <AnchorLink to="/#concerts" title="Concerts" />
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBar;
