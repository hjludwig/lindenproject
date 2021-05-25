import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import formatDate from "../../../../utils/formatDate";
import { breakpoints } from "../../styles/mixins";

const StyledEvent = styled.div`
  width: 100%;

  margin-bottom: 8rem;
  box-shadow: 0 0 5px var(--grey-300);
  color: #222;
  h1 {
    font-size: 4.2rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 3rem;
    color: var(--grey-400);
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
    z-index: -1;
  }

  ${breakpoints.tablet} {
    border-right: none;
    height: 380px;
    :before {
      content: "";
      display: block;
      width: 100%;
      height: 380px;
      position: absolute;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        357deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 15%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`;
const TitleLink = styled(Link)`
  color: #222;
  text-decoration: none;
  position: relative;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 6rem;
  ${breakpoints.tablet} {
    display: flex;
    flex-direction: column;
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

const ArchiveEvent = ({ event }) => {
  const { title, venue, tagline, id, slug, performances, image } = event;
  return (
    <StyledEvent key={id}>
      <TitleLink to={`/${slug.current}`}>
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
            {venue && <span className="venue">{venue}</span>}
          </Details>
        </Text>
      </TitleLink>
    </StyledEvent>
  );
};

export default ArchiveEvent;
