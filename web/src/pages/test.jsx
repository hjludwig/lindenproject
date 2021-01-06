import { graphql } from "gatsby";
import React from "react";

const Test = ({ data }) => {
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

export const query = graphql`
  query {
    allSanityEvent {
      nodes {
        title
      }
    }
  }
`;

export default Test;
