import React, { useState } from "react";
import { FaBars, FaColumns } from "react-icons/fa";
import styled from "styled-components";
import NavBar from "./NavBar";

const NavItems = styled(NavBar)`
  padding: 4rem 5%;
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin-bottom: 2rem;
    }
  }
`;

const NavWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--grey-800);
  top: 0;
  right: 0;
  /* transform: translateX(-100vw); */
  color: white;
`;
const MenuIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 5%;
  color: var(--grey-500);
  .react-icon {
    width: 3rem;
    height: 3rem;
  }
`;

const MobileNav = () => {
  const [showIcon, setShowIcon] = useState(false);
  const handleClick = e => {
    alert("Click!");
  };
  return (
    <NavWrapper>
      <NavItems />
      <MenuIcon>
        <FaBars />
      </MenuIcon>
    </NavWrapper>
  );
};

export default MobileNav;
