import React from "react";
import styled from "styled-components";
// import MapButton from "./MapButton";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";
import {
  FaFileDownload,
  FaInfo,
  FaInfoCircle,
  FaTicketAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Button } from "../Button";

const InfoStyles = styled.div`
  background: var(--grey-100);
  padding: 5rem;
  position: relative;
  h4 {
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 0.1em;
  }

  > div {
    /* margin-bottom: 3rem; */
    border-top: 1px solid var(--grey-300);
    padding: 3rem 0;
  }
  .info-icon {
    /* width: 100%; */
    color: var(--grey-300);
    color: var(--lp-green);
    height: 4rem;
    width: 4rem;
    border-radius: 9999px;
    position: absolute;
    top: -1.4rem;
    left: 50%;
    transform: translateX(-50%);
    background: white;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const MapButton = ({ address }) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURI(
    address
  )}`;
  return (
    <Button as="a" href={url} target="blank">
      Map
    </Button>
  );
};

const Info = ({ event }) => {
  const { venue, venueAddress, performances, ticketsLink, program } = event;
  return (
    <InfoStyles>
      <IconContext.Provider value={{ className: "info-icon" }}>
        <FaInfoCircle />
      </IconContext.Provider>

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
      <Buttons>
        {ticketsLink && (
          <Button as="a" href={ticketsLink} primary>
            <FaTicketAlt />
            Tickets
          </Button>
        )}
        {program && (
          <Button as="a" href={`${program.asset.url}?dl=`}>
            Download the Program
          </Button>
        )}
      </Buttons>
    </InfoStyles>
  );
};

export default Info;
