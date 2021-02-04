import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import formatDate from "../../../../utils/formatDate";
import { Button } from "../Button";

const StyledEvent = styled.div`
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  box-shadow: 0 0 5px var(--grey-300);
  h1 {
    font-size: 3.8rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 2.8rem;
    color: var(--grey-400);
  }
`;
const TitleLink = styled(Link)`
  color: var(--grey-900);
  text-decoration: none;
  :hover {
    color: var(--grey-500);
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6rem;
`;
const Details = styled.div`
  order: -1;
  /* margin-bottom: 1rem; */
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
`;
const Media = styled.div`
  border-right: 1px solid var(--grey-200);
  height: 240px;
  width: 240px;
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

const ArchiveEvent = ({ event }) => {
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
          <TitleLink to={`../${slug.current}`}>
            <h1>{title}</h1>
          </TitleLink>
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
      </Text>
    </StyledEvent>
  );
};

export default ArchiveEvent;
