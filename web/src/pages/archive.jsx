import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
// import { formatDate } from "../../../utils/formatDate";

const Archive = ({ data }) => {
  const getSeason = event => {
    if (event.performances.length !== 0) {
      const firstPerformance = new Date(event.performances[0].dateTime);
      const month = firstPerformance.getMonth();
      console.log(month);
      if (month > 7) {
        const season = `${firstPerformance.getFullYear()}/${
          firstPerformance.getFullYear() + 1
        }`;
        return `The performance date is ${firstPerformance}. You are in the first half of the ${season} season`;
      } else {
        const season = `${
          firstPerformance.getFullYear() - 1
        }/${firstPerformance.getFullYear()}`;
        return `The performance date is ${firstPerformance}. You are in the last half of the ${season} season`;
      }
    } else {
      console.log("No dates to work with");
    }
  };

  // 1. Go through array and push event to new array if it's part of a certain season
  // 2. Get first performance month from dateTime
  //      If first performance month is > July, it's season is the year/year + 1
  //      If first performance month is < July, it's season is year-1/year

  // Array filter: event dateTime is > seasonStart and < season end
  // Push new array to array of seasons

  return (
    <Layout>
      <SEO title="Archive" />
      {data.events.nodes.map(event => {
        return (
          <div>
            <h3>{event.title}</h3> {getSeason(event)}
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
