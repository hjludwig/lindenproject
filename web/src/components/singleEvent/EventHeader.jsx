import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";
import { Button } from "../Button";
import { FaTicketAlt, FaYoutube } from "react-icons/fa";

const Banner = styled.div`
  margin-top: 12rem;
  height: 60vh;
  background: linear-gradient(180deg, #000000 0%, #1c1e21 100%);
  .gatsby-image-wrapper {
    height: 100%;
    opacity: 0.25;
  }
`;
const Header = styled.header`
  margin-top: 12rem;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 60vh;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  h1 {
    margin-bottom: 0;
  }
  h2:after {
    content: "";
    display: block;
    margin: 3rem auto 2rem auto;
    width: 5em;
    border: 1px solid white;
  }
  @media (min-width: 550px) {
    h1 {
      font-size: 6rem;
    }
  }
`;

// TODO : Add performance date and time

const EventHeader = ({ event }) => {
  const {
    image,
    title,
    tagline,
    venue,
    youTubeURL,
    ticketsLink,
    performances,
  } = event;

  return (
    <>
      <Banner>{image && <Img fluid={image.asset.fluid} />}</Banner>
      <Header>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
        {/* TODO Create formatting allowing for more than one performance date */}
        {(performances.length !== 0 || venue) && (
          <h3>
            {performances[0] && (
              <span>
                {formatTime(performances[0].dateTime)}{" "}
                {formatDate(performances[0].dateTime)}
              </span>
            )}
            <span className="separator"> | </span>
            {venue}
          </h3>
        )}
        <div className="buttons">
          {ticketsLink && (
            <Button primary as="a" href={ticketsLink} target="_blank">
              <FaTicketAlt />
              Tickets
            </Button>
          )}
          {youTubeURL && (
            <Button as="a" href={youTubeURL} target="_blank">
              <FaYoutube />
              Watch Now
            </Button>
          )}
        </div>
      </Header>
    </>
  );
};

export default EventHeader;
