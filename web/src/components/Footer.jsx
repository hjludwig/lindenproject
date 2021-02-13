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
  display: grid;
  grid-template-columns: 1fr 5fr;
  /* display: flex;
  align-items: center; */
  /* justify-content: space-around; */
`;
const Wrapper = styled.div`
  /* width: 95%;
  margin: 20rem auto; */
  /* ${centered} */
  display: grid;
  grid-template-columns: repeat(4, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;
const Logo = styled.div`
  width: 75%;
  /* margin: auto; */
`;
const Meta = styled.div`
  /* grid-column: span 6; */
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
      <Logo>
        <Img alt={name} fluid={logoInverse.asset.fluid} />
      </Logo>
      <Wrapper>
        <Performances />
        <Subscribe />
        <Follow />
        <Support />
      </Wrapper>
      <Meta>
        <small>© {new Date().getFullYear()}, The Linden Project.</small>
      </Meta>
    </FooterStyles>
  );
};

export default Footer;
