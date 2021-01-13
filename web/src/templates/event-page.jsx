import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Event = styled.section`
  margin-top: 12rem;
  min-height: 100vh;
  position: relative;
`;
const Banner = styled.div`
  height: 60vh;
  background: grey;
  .gatsby-image-wrapper {
    height: 100%;
  }
  /* display: flex; */
`;
const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 60vh;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const EventPage = ({ data }) => {
  const {
    title,
    tagline,
    image,
    venue,
    venueAddress,
    ticketsLink,
  } = data.event;
  const styles = {
    background: "blue",
    // backgroundImage: `url(${image.asset.fluid})`,
  };
  return (
    <Layout>
      <Event className="">
        <Banner>
          <Img fluid={image.asset.fluid} />
        </Banner>
        <Header>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
          <h3>{venue}</h3>
          <a
            className="button button-primary"
            href={ticketsLink}
            target="blank"
          >
            Tickets
          </a>
        </Header>
      </Event>
    </Layout>
  );
};

export default EventPage;

export const query = graphql`
  query($slug: String!) {
    event: sanityEvent(slug: { current: { eq: $slug } }) {
      title
      tagline
      ticketsLink
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      venue
      venueAddress {
        lat
        lng
      }
    }
  }
`;
