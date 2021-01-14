import React from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";

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
  top: -10rem;
  background: white;
  width: 80%;
  margin: 0 auto;
  padding: 10rem 0;
`;

const EventBody = ({ event }) => {
  const { _rawDescription } = event;
  console.log(_rawDescription);
  return (
    <Main className="wrapper">
      <div className="container">
        <div className="description">
          <BlockContent blocks={_rawDescription} serializers={serializers} />
        </div>
        <div className="info">Venue and tickets info. Program download</div>
        <div className="performers">
          <h2>The performers</h2>
        </div>
      </div>
    </Main>
  );
};

export default EventBody;
