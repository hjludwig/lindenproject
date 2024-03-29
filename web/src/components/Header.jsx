import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import NavBar from "./NavBar";
import { breakpoints } from "../styles/mixins";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const HeaderWrapper = styled.div`
  width: 100%;
  position: ${props =>
    props.sticky ? "sticky" : props.open ? "sticky" : "relative"};
  top: 0;
  left: 0;
  background: ${props =>
    props.isHome && !props.sticky ? "transparent" : "white"};
  color: ${props => (props.isHome && !props.sticky ? "white" : "inherit")};
  z-index: 999;
  box-shadow: ${props =>
    props.isHome && !props.sticky
      ? "none"
      : "0 0 10px 0 rgba(24, 24, 27, 0.2)"};
  transform: ${props =>
    props.offScreen && !props.open ? "translateY(-120px)" : "translateY(0)"};
  transition: transform 0.2s ease;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;
const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  > * {
    display: ${props => (props.isHome && !props.sticky ? "none" : "block")};
  }
  ${breakpoints.largeMobile} {
    height: 60px;
  }
`;

const Logo = styled(Img)`
  ${breakpoints.largeMobile} {
    display: none;
  }
`;

const MobileIcon = styled(Img)`
  display: none;
  ${breakpoints.largeMobile} {
    width: 60px;
    display: block;
  }
`;

const Header = ({ isHome }) => {
  const [sticky, setSticky] = useState(false);
  const [offScreen, setOffScreen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > 200 && currPos.y < 1400) {
        setOffScreen(true);
      } else {
        setOffScreen(false);
      }
      if (currPos.y > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    },
    [sticky, offScreen],
    null,
    true,
    200
  );

  const data = useStaticQuery(graphql`
    query {
      org: allSanityOrganization {
        nodes {
          name
          logo {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          icon {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const { name, logo, icon } = data.org.nodes[0];

  return (
    <HeaderWrapper
      isHome={isHome}
      sticky={sticky}
      offScreen={offScreen}
      open={open}
    >
      <StyledHeader>
        <LogoWrapper isHome={isHome} sticky={sticky}>
          <Link to="/">
            <title>{name}</title>
            <Logo fluid={logo.asset.fluid} alt={name} />
            <MobileIcon fluid={icon.asset.fluid} alt={name} />
          </Link>
        </LogoWrapper>
        <NavBar isHome={isHome} sticky={sticky} toggle={toggle} open={open} />
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
