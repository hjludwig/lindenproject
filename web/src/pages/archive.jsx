import { graphql } from "gatsby";
import React from "react";
import Event from "../components/Home/Event";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styled from "styled-components";
import { centered } from "../styles/mixins";
import ArchiveEvent from "../components/archive/ArchiveEvent";

const Events = styled.section`
  ${centered}
  padding: 20rem 0;
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
  :before {
    content: "";
    display: block;
    border: 1px solid var(--grey-300);
    width: 40%;
    position: absolute;
    top: 2rem;
    /* transform: translateY(3rem); */
  }
  :after {
    content: "";
    display: block;
    border: 1px solid var(--grey-300);
    width: 40%;
    position: absolute;
    right: 0;
    top: 2rem;
    /* transform: translateY(3rem); */
  }
`;

const Archive = ({ data }) => {
  // Take an event object and determine the season it belongs to and assign that to a new property in the event object
  const assignSeason = event => {
    if (event.performances.length !== 0) {
      const firstPerformance = new Date(event.performances[0].dateTime);
      const month = firstPerformance.getMonth();
      const newEvent = { ...event };
      if (month > 7) {
        newEvent.season = `${firstPerformance.getFullYear()}/${
          firstPerformance.getFullYear() + 1
        }`;
      } else {
        newEvent.season = `${
          firstPerformance.getFullYear() - 1
        }/${firstPerformance.getFullYear()}`;
      }
      return newEvent;
    } else {
      console.log("No dates to work with");
    }
  };

  //  Create a new array of events with a season property and assign the appropriate season
  const newEvents = [];
  data.events.nodes.map(event => {
    const newEvent = assignSeason(event);
    newEvents.push(newEvent);
  });

  // Group the new events array into an object by season
  const seasons = newEvents.reduce((r, a) => {
    r[a.season] = [...(r[a.season] || []), a];
    return r;
  }, {});

  // Get the keys for our new object so we can render each value (the array of events)
  const keys = Object.keys(seasons);

  return (
    <Layout>
      <SEO title="Archive" />
      <Events>
        <h1>Past Seasons</h1>
        {keys.map(key => {
          const events = seasons[key];
          return (
            <Season>
              <SeasonHeading>{key}</SeasonHeading>
              {events.map(event => {
                return <ArchiveEvent event={event} />;
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
