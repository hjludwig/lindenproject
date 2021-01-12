import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import formatDate from "../../../utils/formatDate";
const StyledEvent = styled.section`
  display: flex;
  .media .gatsby-image-wrapper img {
    object-fit: cover;
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
      <div className="media four columns">
        <Img fluid={image.asset.fluid} />
      </div>
      <div className="eight columns">
        <hgroup>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
        </hgroup>
        <div>
          <span>{formatDate(performances[0].dateTime)}</span>
          <span className="separator"> | </span>
          <span>{venue}</span>
        </div>
        <div>
          <a className="button button-primary" href={ticketsLink}>
            Tickets
          </a>
          <Link className="button" to={slug.current}>
            More Info
          </Link>
        </div>
      </div>
    </StyledEvent>
  );
};

export default Event;
