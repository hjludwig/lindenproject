import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { FaTicketAlt, FaYoutube } from "react-icons/fa";
import { breakpoints } from "../../styles/mixins";

const Buttons = styled.div`
  /* display: flex;
  justify-content: center; */
  text-align: center;
  ${breakpoints.tablet} {
    display: block;
  }
`;
const YouTubeButton = styled(Button)`
  background: red;
  border-color: red;
  color: white;
  &:hover {
    background: #ff3131;
    border-color: #ff3131;
    color: white;
  }
`;

const InfoButtons = ({ event }) => {
  const { ticketsLink, youTubeURL, program } = event;
  return (
    <Buttons>
      {ticketsLink && (
        <Button as="a" href={ticketsLink} target="_blank" primary>
          <FaTicketAlt />
          Tickets
        </Button>
      )}
      {youTubeURL && (
        <YouTubeButton as="a" href={youTubeURL} target="_blank">
          <FaYoutube />
          Watch Now
        </YouTubeButton>
      )}
      {program && (
        <Button as="a" href={`${program.asset.url}?dl=`}>
          Download the Program
        </Button>
      )}
    </Buttons>
  );
};

export default InfoButtons;
