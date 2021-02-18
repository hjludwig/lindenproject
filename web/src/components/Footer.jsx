import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Performances from "./footer/Performances";
import Img from "gatsby-image";
import Subscribe from "./footer/Subscribe";
import Follow from "./footer/Follow";
import Support from "./footer/Support";
import { breakpoints, centered } from "../styles/mixins";

const FooterStyles = styled.footer`
  background: var(--grey-800);
  color: var(--grey-200);
  padding-top: 1px;
`;
const Wrapper = styled.div`
  ${centered}
  padding-bottom: 10rem;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 2rem;
  column-gap: 10rem;
  ${breakpoints.smallDesktop} {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin: 5rem auto 0 auto;
  }
  ${breakpoints.largeMobile} {
    display: flex;
    flex-direction: column;
    margin: 5rem auto 0 auto;
  }
`;
const Logo = styled.div`
  width: 20rem;
  grid-row: span 2;
  ${breakpoints.smallDesktop} {
    grid-column: 1/-1;
    grid-row: span 1;
    margin: auto;
    width: 15rem;
    margin-bottom: 4rem;
  }
`;
const Meta = styled.div`
  grid-column: 1/-1;
  border-top: 1px solid var(--grey-700);
  padding-top: 2em;
  margin-top: 2em;
  text-align: right;
  color: var(--grey-500);
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      org: allSanityOrganization {
        nodes {
          name
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
  const { name, logoInverse } = data.org.nodes[0];
  return (
    <FooterStyles>
      <Wrapper>
        <Logo>
          <Img alt={name} fluid={logoInverse.asset.fluid} />
        </Logo>
        <Performances />
        <Subscribe />
        <Support />
        <Follow />
        <Meta>
          <small>© {new Date().getFullYear()}, The Linden Project.</small>
        </Meta>
      </Wrapper>
    </FooterStyles>
  );
};

export default Footer;
