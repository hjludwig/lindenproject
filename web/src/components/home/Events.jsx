import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Event from "./Event";

import styled from "styled-components";

const StyledEvents = styled.section`
  padding: 20rem 0;
  > h1 {
    text-align: center;
    margin-bottom: 10rem;
  }
`;
// TODO: order by date and filter by season

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityEvent {
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
  `);
  const events = data.allSanityEvent.nodes;
  return (
    <StyledEvents id="concerts" className="container">
      <h1>Concerts</h1>
      {events.map(event => {
        return <Event event={event} />;
      })}
    </StyledEvents>
  );
};

export default Events;
