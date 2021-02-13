import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Event from "./Event";
import { centered } from "../../styles/mixins";
import { Button } from "../Button";

import styled from "styled-components";
import buildSeasons from "../../utils/buildSeasons";
import getSeason from "../../utils/getSeason";

const StyledEvents = styled.section`
  ${centered};

  > h1 {
    text-align: center;
    margin-bottom: 10rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;
// TODO: filter by season

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

  const currentSeason = getSeason(new Date());

  const seasons = buildSeasons(data.allSanityEvent.nodes);
  const events = seasons[currentSeason];

  return (
    <StyledEvents id="concerts">
      <h1>Concerts</h1>
      {events.map(event => {
        return <Event key={event.id} event={event} />;
      })}
      <Button as={Link} to="archive">
        View past seasons
      </Button>
    </StyledEvents>
  );
};

export default Events;
