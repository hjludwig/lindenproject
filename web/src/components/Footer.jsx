import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Performances from "./footer/Performances";
import Img from "gatsby-image";
import Subscribe from "./footer/Subscribe";
import Follow from "./footer/Follow";
import Support from "./footer/Support";
import { centered } from "../styles/mixins";

const FooterStyles = styled.footer`
  background: var(--grey-800);
  color: var(--grey-200);
  min-height: 40vh;
  padding-top: 1px;
  /* display: grid;
  grid-template-columns: 1fr 5fr; */
  /* display: flex;
  align-items: center; */
  /* justify-content: space-around; */
`;
const Wrapper = styled.div`
  /* width: 95%;
  margin: 20rem auto; */
  ${centered}
  padding-bottom: 10rem;
  margin-bottom: 0;
  display: grid;
  /* grid-template-columns: repeat(2, minmax(20rem, 1fr)); */
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 2rem;
  column-gap: 10rem;
`;
const Logo = styled.div`
  width: 75%;
  width: 20rem;
  /* margin: auto; */
  grid-row: span 2;
`;
const Meta = styled.div`
  grid-column: span 3;
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
