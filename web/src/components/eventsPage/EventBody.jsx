import React from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import Performer from "./Performer";

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
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 10rem 0;
  .container {
    max-width: 80ch;
  }
`;

const EventBody = ({ event }) => {
  const { _rawDescription, venue, program, performers } = event;
  console.log(performers);
  return (
    <Main className="wrapper">
      <div className="container">
        <div className="description">
          <BlockContent blocks={_rawDescription} serializers={serializers} />
        </div>
        <div className="info">
          <h4>Venue</h4>
          <p>{venue}</p>
          <a className="button button-primary">Tickets</a>
          <a href={`${program.asset.url}?dl=`} className="button">
            Download the Program
          </a>
        </div>
        <div className="performers">
          <h3>The Performers</h3>
          {performers.map(performer => {
            return <Performer performer={performer} />;
          })}
        </div>
      </div>
    </Main>
  );
};

export default EventBody;
