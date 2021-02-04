import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Event from "./Event";
import { centered } from "../../styles/mixins";
import { Button } from "../Button";

import styled from "styled-components";

const StyledEvents = styled.section`
  ${centered};
  padding: 20rem 0;
  > h1 {
    text-align: center;
    margin-bottom: 10rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
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
    <StyledEvents id="concerts">
      <h1>Concerts</h1>
      {events.map(event => {
        return <Event event={event} />;
      })}
      <Button as={Link} to="archive">
        View past seasons
      </Button>
    </StyledEvents>
  );
};

export default Events;
