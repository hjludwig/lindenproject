import React from "react";
import styled from "styled-components";
// import MapButton from "./MapButton";
import InfoPerformances from "./InfoPerformances";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";
import {
  FaFileDownload,
  FaInfo,
  FaInfoCircle,
  FaTicketAlt,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import InfoButtons from "./InfoButtons";
import InfoVenue from "./InfoVenue";
import { breakpoints } from "../../styles/mixins";

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
  h5 {
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0;
    margin-bottom: 1rem;
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
  ${breakpoints.largeMobile} {
    padding: 5rem 3rem 3rem 3rem;
  }
`;

const Info = ({ event }) => {
  const { venue, venueAddress, ticketsLink, youTubeURL, program } = event;
  return (
    <InfoStyles>
      <IconContext.Provider value={{ className: "info-icon" }}>
        <FaInfoCircle />
      </IconContext.Provider>

      <h4>Details</h4>
      {(venue || venueAddress) && <InfoVenue event={event} />}
      <InfoPerformances event={event} />
      {(ticketsLink || youTubeURL || program) && <InfoButtons event={event} />}
    </InfoStyles>
  );
};

export default Info;
