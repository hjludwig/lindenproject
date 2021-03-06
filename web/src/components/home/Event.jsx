import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import formatDate from "../../../../utils/formatDate";
import { Button } from "../Button";
import { breakpoints } from "../../styles/mixins";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const StyledEvent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 6rem;
  margin-bottom: 8rem;
  box-shadow: 0 0 5px var(--grey-300);
  h1 {
    font-size: 4.2rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 3rem;
    color: var(--grey-400);
  }
  ${breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
      font-size: 3.6rem;
    }
    h2 {
      font-size: 2.6rem;
    }
  }
  ${breakpoints.largeMobile} {
    margin-bottom: 3rem;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoints.tablet} {
    padding: 0 5%;
    transform: translateY(-20rem);
    z-index: 99;
    margin-bottom: -15rem;
  }
`;
const Details = styled.div`
  order: -1;
  margin-bottom: 2rem;
  .venue {
    font-weight: 600;
  }
  .separator {
    margin: 0 0.75rem;
    font-size: 3rem;
    font-weight: 300;
    display: inline-block;
    transform: translateY(2px);
    color: var(--grey-300);
  }
  &:after {
    content: "";
    display: block;
    border-top: 1px solid var(--grey-400);
    width: 4em;
    margin-top: 2rem;
  }
  ${breakpoints.tablet} {
    /* background: var(--grey-900); */
    font-weight: 900;
    .venue {
      font-weight: 900;
    }
  }
`;
const Icon = styled.span`
  color: var(--lp-green);
  margin-right: 0.25em;
  position: relative;
  top: 2px;
`;
const Media = styled.div`
  border-right: 1px solid var(--grey-200);
  height: 480px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  ${breakpoints.tablet} {
    border-right: none;
    height: 380px;
    position: relative;
    :before {
      content: "";
      display: block;
      width: 100%;
      height: 380px;
      position: absolute;
      /* top: 0px; */
      background: rgb(255, 255, 255);
      background: linear-gradient(
        357deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 15%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 9;
    }
  }
`;

const Event = ({ event }) => {
  const {
    title,
    ticketsLink,
    venue,
    tagline,
    id,
    slug,
    performances,
    image,
  } = event;
  return (
    <StyledEvent key={id}>
      {image && (
        <Media>
          <Img fluid={image.asset.fluid} />
        </Media>
      )}
      <Text>
        <header>
          <h1 className="balance-text">{title}</h1>
          <h2 className="balance-text">{tagline}</h2>
        </header>

        <Details>
          {/* TODO Create formatting allowing for more than one performance date */}
          {performances[0] && (
            <>
              <span>
                <Icon>
                  <FaCalendarAlt />
                </Icon>

                {formatDate(performances[0].dateTime)}
              </span>
              <span className="separator"> | </span>
            </>
          )}
          {venue && (
            <span className="venue">
              <Icon>
                <FaMapMarkerAlt />
              </Icon>
              {venue}
            </span>
          )}
        </Details>
        <div>
          {ticketsLink && (
            <Button primary as="a" href={ticketsLink}>
              Tickets
            </Button>
          )}
          <Button as={Link} to={slug.current}>
            More Info
          </Button>
        </div>
      </Text>
    </StyledEvent>
  );
};

export default Event;
