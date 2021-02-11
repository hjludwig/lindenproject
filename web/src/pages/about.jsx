import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import { centeredSmall, largeText } from "../styles/mixins";

const Wrapper = styled.section`
  ${centeredSmall}/* max-width: 80ch;
  padding: 20rem 0; */
`;
const Heading = styled.h1`
  color: var(--lp-green);
  text-align: center;
  margin-bottom: 1em;
`;
const MissonStatement = styled.div`
  ${largeText}
  text-align: center;
  :after {
    content: "";
    display: block;
    border-top: 1px solid var(--grey-300);
    margin-top: 10rem;
    margin-bottom: 12rem;
  }
`;

const AboutPage = ({ data }) => {
  console.log(data);
  const {
    missionStatement,
    descriptionShort,
    _rawDescriptionLong,
  } = data.sanityOrganization;
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Heading>We're the Linden Project</Heading>
        <MissonStatement>
          <p>{missionStatement}</p>
          <p>{descriptionShort}</p>
        </MissonStatement>
        <BlockContent blocks={_rawDescriptionLong} />
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query MyQuery {
    sanityOrganization {
      missionStatement
      descriptionShort
      _rawDescriptionLong
    }
  }
`;
