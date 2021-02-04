import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";
import styled from "styled-components";
import PerformerLinks from "./PerformerLinks";
import { breakpoints } from "../../styles/mixins";

const PerformerStyles = styled.div`
  margin: 5rem 0;
  /* clear: both; */
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Headshot = styled.div`
  width: 30%;
  float: left;
  margin: 0 2rem 1rem 0;
  ${breakpoints.largeMobile} {
    width: 100%;
    float: none;
    margin-right: none;
  }
`;

const Performer = ({ performer }) => {
  const { name, instrument, photo, _rawBio, links } = performer;
  return (
    <PerformerStyles>
      <h4>
        {name}
        <span className="separator"> | </span>
        {instrument}
      </h4>
      {links.length !== 0 && <PerformerLinks links={links} />}

      <div className="bio">
        <Headshot>
          <Img fluid={photo.asset.fluid} />
        </Headshot>
        <BlockContent blocks={_rawBio} />
      </div>
    </PerformerStyles>
  );
};

export default Performer;
