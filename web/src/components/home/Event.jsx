import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import formatDate from "../../../../utils/formatDate";
import { Button } from "../Button";

const StyledEvent = styled.div`
  display: flex;
  margin-bottom: 8rem;
  box-shadow: 0 0 5px var(--grey-300);
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .details {
    order: -1;
  }
  .media {
    border-right: 1px solid var(--grey-200);
  }
  @media screen and (max-width: 750px) {
    display: block;
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
    <StyledEvent className="row" key={id}>
      {image && (
        <div className="media four columns">
          <Img fluid={image.asset.fluid} />
        </div>
      )}
      <div className="text eight columns">
        <header>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
        </header>

        <div className="details">
          {/* TODO Create formatting allowing for more than one performance date */}
          {performances[0] && (
            <>
              <span>{formatDate(performances[0].dateTime)}</span>
              <span className="separator"> | </span>
            </>
          )}
          {venue && <span>{venue}</span>}
        </div>
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
      </div>
    </StyledEvent>
  );
};

export default Event;
