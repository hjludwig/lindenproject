import React from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import Performer from "./Performer";
import MapButton from "./MapButton";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";

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
  padding: 10rem 0;
  .container {
    max-width: 80ch;
  }
`;
const Info = styled.div`
  background: grey;
  padding: 5rem;
`;
// TODO: Add event date and time? and venue address
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
          <Info>
            <h4>Details</h4>
            {(venue || venueAddress) && (
              <div className="venue">
                <h5>Venue</h5>
                <p>{venue}</p>
                {venueAddress && (
                  <>
                    <p>{venueAddress}</p>
                    <MapButton address={venueAddress} />
                  </>
                )}
              </div>
            )}
            <div className="performances">
              <h5>Performances</h5>
              {performances.length === 0 ? (
                <p>Performance data and time TBA</p>
              ) : (
                <ul>
                  {performances.map(performance => {
                    return (
                      <li key={performance._key}>
                        {formatTime(performance.dateTime)}{" "}
                        {formatDate(performance.dateTime)}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {ticketsLink && (
              <a href={ticketsLink} className="button button-primary">
                Tickets
              </a>
            )}
            {program && (
              <a href={`${program.asset.url}?dl=`} className="button">
                Download the Program
              </a>
            )}
          </Info>
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
