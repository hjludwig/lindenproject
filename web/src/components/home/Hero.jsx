import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import background from "../../../static/images/hero-bg-temp2.jpg";
import { Button } from "../Button";

const StyledHeader = styled.header`
  background: grey;
  background-image: url(${background});
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Logo = styled.div`
  max-width: 200px;
  margin-bottom: 4rem;
`;
const Buttons = styled.div`
  margin-top: 4rem;
  color: white;
`;
const Subtitle = styled.h2`
  color: var(--grey-400);
  .highlight {
    color: var(--lp-green);
    margin-right: 0.1em;
  }
  font-size: 8rem;
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
  const { name, tagline, logo, logoInverse } = data.org.nodes[0];

  return (
    <StyledHeader>
      <div className="container">
        <Logo>
          <Link to="/">
            <title>{name}</title>
            <Img fluid={logoInverse.asset.fluid} alt={name} />
          </Link>
        </Logo>
        <Subtitle>
          <span class="highlight">{tagline.slice(0, 4)}</span>
          {tagline.slice(4)}
        </Subtitle>
        <Buttons>
          <Button as={Link} to="/about">
            Learn More
          </Button>
          <Button as={AnchorLink} to="/#concerts" title="Concerts" primary />
        </Buttons>
      </div>
    </StyledHeader>
  );
};

export default Header;
