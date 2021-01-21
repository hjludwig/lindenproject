import React from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import Performer from "./Performer";
import Info from "./Info";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Main = styled.div`
  min-height: 100vh;
  position: relative;
  top: -5rem;
  background: white;
  width: 80%;
  margin: 0 auto;
  padding: 12rem 0;
  h3 {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0;
  }
  .container {
    max-width: 80ch;
    > div {
      margin-bottom: 10rem;
    }
  }
  .description p:first-of-type {
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1.4;
  }
`;

const EventBody = ({ event }) => {
  const {
    _rawDescription,
    venue,
    program,
    performers,
    venueAddress,
    performances,
    ticketsLink,
  } = event;
  return (
    <Main className="wrapper">
      <div className="container">
        {_rawDescription && (
          <div className="description">
            <BlockContent blocks={_rawDescription} serializers={serializers} />
          </div>
        )}
        {(venue || venueAddress || performances.length !== 0 || program) && (
          <Info event={event} />
        )}
        {performers.length !== 0 && (
          <div className="performers">
            <h3>The Performers</h3>
            {performers.map(performer => {
              return <Performer key={performer._key} performer={performer} />;
            })}
          </div>
        )}
      </div>
    </Main>
  );
};

export default EventBody;
