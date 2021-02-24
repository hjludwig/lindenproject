import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import background from "../../../static/images/bg2.jpg";
import { Button } from "../Button";
import { breakpoints } from "../../styles/mixins";

const StyledHeader = styled.header`
  background: grey;
  background-image: url(${background});
  background-size: cover;
  background-position: 40% 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoints.smallDesktop} {
    background-position: 55% 0;
  }
`;
const Logo = styled.div`
  max-width: 200px;
  margin-bottom: 4rem;
  ${breakpoints.smallDesktop} {
    max-width: 180px;
  }
  ${breakpoints.largeMobile} {
    max-width: 160px;
  }
`;
const Buttons = styled.div`
  margin-top: 4rem;
  color: white;
`;
const Subtitle = styled.h2`
  color: var(--grey-200);
  .highlight {
    color: var(--lp-green);
    margin-right: 0.1em;
  }
  font-size: 8rem;
  line-height: 1.1;
  ${breakpoints.smallDesktop} {
    font-size: 6rem;
  }
  ${breakpoints.largeMobile} {
    font-size: 5rem;
  }
  ${breakpoints.mobile} {
    font-size: 4rem;
  }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      org: allSanityOrganization {
        nodes {
          name
          tagline
          logoInverse {
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
  const { name, tagline, logoInverse } = data.org.nodes[0];

  return (
    <StyledHeader>
      <div className="container">
        <Logo>
          <title>{name}</title>
          <Img fluid={logoInverse.asset.fluid} alt={name} />
        </Logo>
        <Subtitle className="balance-text">
          <span className="highlight">{tagline.slice(0, 4)}</span>
          {tagline.slice(4)}
        </Subtitle>
        <Buttons>
          <Button as={AnchorLink} to="/#concerts" title="Concerts" primary />
          <Button as={Link} to="/about">
            Learn More
          </Button>
        </Buttons>
      </div>
    </StyledHeader>
  );
};

export default Header;
