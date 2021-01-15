import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";
import styled from "styled-components";

const Headshot = styled.div`
  width: 30%;
  float: left;
  margin: 0 2rem 1rem 0;
`;

const Performer = ({ performer }) => {
  const { name, instrument, photo, _rawBio, links } = performer;
  return (
    <div className="performer">
      <h4 className="u-cf">
        {name}
        <span className="separator"> | </span>
        {instrument}
      </h4>
      <ul className="links">
        {links.map(link => {
          return (
            <li key={link._key}>
              <a href={link.url}>{link.type[0]}</a>
            </li>
          );
        })}
      </ul>

      <div className="bio">
        <Headshot>
          <Img fluid={photo.asset.fluid} />
        </Headshot>
        <BlockContent blocks={_rawBio} />
      </div>
    </div>
  );
};

export default Performer;
