import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import NavBar from "./NavBar";

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 9;
  box-shadow: 0 0 10px 0 rgba(24, 24, 27, 0.2);
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
`;

const Header = () => {
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
    <HeaderWrapper>
      <StyledHeader>
        <Logo>
          <Link to="/">
            <title>{name}</title>
            <Img fluid={logo.asset.fluid} alt={name} />
          </Link>
        </Logo>
        <NavBar />
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
