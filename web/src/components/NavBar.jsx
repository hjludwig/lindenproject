import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { breakpoints } from "../styles/mixins";
import { Button } from "./Button";

const MenuButton = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  display: none;
  cursor: pointer;
  ${breakpoints.largeMobile} {
    display: block;
  }
  color: ${props => (props.isHome && !props.sticky ? "white" : "inherit")};
`;

const DonateButton = styled(Button)`
  margin-bottom: 0;
  color: white;
`;
const Nav = styled.nav`
  /* position: relative; */
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
    ${breakpoints.largeMobile} {
      position: fixed;
      top: 0;
      left: 0;
      width: calc(100vw - 3em);
      height: 100vh;
      display: flex;
      flex-direction: column;
      background: var(--grey-800);
      color: var(--grey-200);
      padding: 5rem 0;
      transform: translateX(-100vw);
      transition: 0.25s all ease-in-out;
    }
    li {
      margin-left: 2rem;
      a:not(.button) {
        text-decoration: none;
        color: var(--dark-gray);
      }
      ${breakpoints.largeMobile} {
        margin: 2rem 0;
        /* padding: 2rem 0; */
        width: 90%;
        text-align: center;
      }
    }
  }
  .show {
    transform: translateX(0);
  }
`;

const NavBar = ({ className, isHome, sticky, open, toggle }) => {
  return (
    <Nav className={className} onClick={toggle}>
      <ul className={open ? "show" : ""}>
        <li>
          <AnchorLink to="/#concerts" title="Concerts" />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <DonateButton className="button" as={Link} to="/donate" primary>
            Donate
          </DonateButton>
        </li>
      </ul>
      <MenuButton isHome={isHome} sticky={sticky}>
        {open ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </Nav>
  );
};

export default NavBar;
