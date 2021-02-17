import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const DonateButton = styled(Button)`
  margin-bottom: 0;
  color: white;
`;
const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-right: 5%;
    align-items: center;
    * {
      margin-bottom: 0;
    }
    li {
      margin-left: 2rem;
      a:not(.button) {
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
        <li>
          <DonateButton className="button" as={Link} to="/donate" primary>
            Donate
          </DonateButton>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
