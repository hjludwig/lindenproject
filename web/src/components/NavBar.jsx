import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-right: 5%;
    li {
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: var(--dark-gray);
      }
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <AnchorLink to="/#concerts" title="Concerts" />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
