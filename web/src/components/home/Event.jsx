import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import formatDate from "../../../../utils/formatDate";
import { Button } from "../Button";

const StyledEvent = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8rem;
  box-shadow: 0 0 5px var(--grey-300);
  h1 {
    font-size: 3.8rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 3.4rem;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6rem;
  @media {
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
`;
const Media = styled.div`
  border-right: 1px solid var(--grey-200);
  height: 480px;
  width: 480px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1300px) {
    width: 95%;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: 95%;
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
          <h1>{title}</h1>
          <h2>{tagline}</h2>
        </header>

        <Details>
          {/* TODO Create formatting allowing for more than one performance date */}
          {performances[0] && (
            <>
              <span>{formatDate(performances[0].dateTime)}</span>
              <span className="separator"> | </span>
            </>
          )}
          {venue && <span class="venue">{venue}</span>}
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
