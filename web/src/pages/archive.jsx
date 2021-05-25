import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import styled from "styled-components";
import { centered } from "../styles/mixins";
import ArchiveEvent from "../components/archive/ArchiveEvent";
import buildSeasons from "../utils/buildSeasons";
import getSeason from "../utils/getSeason";

const Events = styled.section`
  ${centered}
  > h1 {
    text-align: center;
  }
`;
const Season = styled.div`
  padding: 8rem 0;
`;
const SeasonHeading = styled.h3`
  position: relative;
  text-align: center;
  margin-bottom: 8rem;
  &:before,
  &:after {
    @media screen and (min-width: 550px) {
      content: "";
      display: block;
      border-top: 1px solid var(--grey-300);
      position: absolute;
      top: 2rem;

      width: 30%;
    }
    @media screen and (min-width: 1100px) {
      width: 40%;
    }
  }
  &:after {
    right: 0;
  }
`;

const Archive = ({ data }) => {
  const seasons = buildSeasons(data.events.nodes);

  const today = new Date();
  const currentSeason = getSeason(today);
  const keys = Object.keys(seasons).sort();

  // Remove current and future season keys from our keys array
  keys.splice(keys.findIndex(key => key === currentSeason));

  return (
    <Layout>
      <SEO title="Archive" />
      <Events>
        <h1>Past Seasons</h1>
        {keys.map(key => {
          const events = seasons[key];
          return (
            <Season key={key}>
              <SeasonHeading>{key}</SeasonHeading>
              {events.map(event => {
                return <ArchiveEvent key={event.id} event={event} />;
              })}
            </Season>
          );
        })}
      </Events>
    </Layout>
  );
};

export default Archive;

export const query = graphql`
  query {
    events: allSanityEvent(
      sort: { fields: performances___dateTime, order: ASC }
    ) {
      nodes {
        title
        slug {
          current
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        ticketsLink
        venue
        tagline
        id
        performances {
          dateTime
        }
      }
    }
  }
`;
