import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
// import { formatDate } from "../../../utils/formatDate";

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
      {keys.map(key => {
        const events = seasons[key];
        return (
          <div>
            <h2>{key}</h2>
            {events.map(event => {
              return <h3>{event.title}</h3>;
            })}
          </div>
        );
      })}
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
        tagline
        slug {
          current
        }
        performances {
          dateTime
        }
      }
    }
  }
`;
