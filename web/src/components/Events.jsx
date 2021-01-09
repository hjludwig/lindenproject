import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityEvent {
        nodes {
          title
        }
      }
    }
  `);
  const events = data.allSanityEvent.nodes;
  return (
    <section id="concerts">
      {events.map(event => {
        return <h1>{event.title}</h1>;
      })}
    </section>
  );
};

export default Events;
