import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import EventHeader from "../components/singleEvent/EventHeader";
import EventBody from "../components/singleEvent/eventBody";
import SEO from "../components/Seo";
const EventPage = ({ data }) => {
  const event = data.event;
  return (
    <Layout>
      <SEO title={event.title} />
      <EventHeader event={event} />
      <EventBody event={event} />
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
      youTubeURL
      _rawDescription
      performances {
        dateTime
        _key
      }
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      venue
      venueAddress
      program {
        asset {
          url
        }
      }
      performers {
        name
        instrument
        _rawBio
        _key
        links {
          type
          url
          _key
        }
        photo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
