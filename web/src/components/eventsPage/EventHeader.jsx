import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";

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
  const date = formatDate(performances[0].dateTime);
  const time = formatTime(performances[0].dateTime);

  return (
    <>
      <Banner>
        <Img fluid={image.asset.fluid} />
      </Banner>
      <Header>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
        {/* TODO Create formatting allowing for more than one performance date */}
        <h3>
          {time} {date}
          <span className="separator"> | </span>
          {venue}
        </h3>

        <a className="button button-primary" href={ticketsLink} target="blank">
          Tickets
        </a>
        <a href={youTubeURL} className="button">
          Watch Now
        </a>
      </Header>
    </>
  );
};

export default EventHeader;
