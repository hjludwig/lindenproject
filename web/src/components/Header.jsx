import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const HeaderWrapper = styled.div`
  width: 100%;
  position: ${props => (props.isHome ? "absolute" : "sticky")};
  top: 0;
  left: 0;
  background: ${props => (props.isHome ? "transparent" : "white")};
  /* background: white; */
  z-index: 999;
  box-shadow: ${props =>
    props.isHome ? "none" : "0 0 10px 0 rgba(24, 24, 27, 0.2)"};
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  /* padding: 0 5px; */
`;
const Logo = styled.div`
  width: 120px;
  display: ${props => (props.isHome ? "none" : "block")};
`;

const Header = ({ isHome }) => {
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
        }
      }
    }
  `);
  const { name, logo } = data.org.nodes[0];

  return (
    <HeaderWrapper isHome={isHome}>
      <StyledHeader>
        <Logo isHome={isHome}>
          <Link to="/">
            <title>{name}</title>
            <Img fluid={logo.asset.fluid} alt={name} />
          </Link>
        </Logo>
        <NavBar isHome={isHome} />
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
