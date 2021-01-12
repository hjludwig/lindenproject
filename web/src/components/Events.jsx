import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Event from "./Event";

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
    <section id="concerts" className="container">
      {events.map(event => {
        return <Event event={event} />;
      })}
    </section>
  );
};

export default Events;
