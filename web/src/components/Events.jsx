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
  console.log(data);
  const events = data.allSanityEvent.nodes;
  return (
    <div>
      {events.map(event => {
        return <h1>{event.title}</h1>;
      })}
    </div>
  );
};

export default Events;
