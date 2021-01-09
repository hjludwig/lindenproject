import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import NavBar from "./NavBar";

const StyledHeader = styled.header`
  background: grey;
  height: 100vh;
`;
const Logo = styled.div`
  max-width: 200px;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      org: allSanityOrganization {
        nodes {
          name
          tagline
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
  const { name, tagline, logo } = data.org.nodes[0];

  return (
    <StyledHeader>
      <NavBar />
      <Logo>
        <Link to="/">
          <title>{name}</title>
          <Img fluid={logo.asset.fluid} alt={name} />
        </Link>
      </Logo>
      <h2>{tagline}</h2>
      <button>
        <Link to="/about">Learn More</Link>
      </button>
    </StyledHeader>
  );
};

export default Header;
