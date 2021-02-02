import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";
import { Button } from "../Button";
import { FaTicketAlt, FaYoutube } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { breakpoints } from "../../styles/mixins";

const Wrapper = styled.div`
  height: 80vh;
  position: relative;
`;
const Banner = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #000000 0%, #1c1e21 100%);
  .gatsby-image-wrapper {
    height: 100%;
    opacity: 0.25;
  }
`;
const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  h1 {
    margin-bottom: 0;
    font-size: 6rem;
    text-wrap: balance;
    ${breakpoints.tablet} {
      font-size: 5rem;
    }
    ${breakpoints.largeMobile} {
      font-size: 3.8rem;
    }
  }
  h2 {
    ${breakpoints.tablet} {
      font-size: 3.8rem;
    }
    ${breakpoints.largeMobile} {
      font-size: 2.8rem;
    }
  }
  h2:after {
    content: "";
    display: block;
    margin: 3rem auto 2rem auto;
    width: 5em;
    border: 1px solid white;
  }
  ${breakpoints.smallDesktop} {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  h3 {
    ${breakpoints.tablet} {
      font-size: 3rem;
    }
  }
`;

const DownArrow = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 1rem;
  color: var(--grey-400);
  z-index: 99;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  .react-icon {
    width: 60%;
    height: 60%;
    transform: translateY(2px);
  }
`;
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
    <Wrapper>
      <Banner>{image && <Img fluid={image.asset.fluid} />}</Banner>
      <Header>
        <h1 className="balance-text">{title}</h1>
        <h2 className="balance-text">{tagline}</h2>
        {/* TODO Create formatting allowing for more than one performance date */}
        {(performances.length !== 0 || venue) && (
          <h3 className="balance-text">
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
        <DownArrow>
          <IoIosArrowDown />
        </DownArrow>
      </Header>
    </Wrapper>
  );
};

export default EventHeader;
