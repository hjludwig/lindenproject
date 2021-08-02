import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";
import styled from "styled-components";
import { breakpoints } from "../../styles/mixins";

const PersonStyles = styled.div`
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

const Person = ({ person }) => {
  const { name, headshot, title, bio } = person;
  return (
    <PersonStyles>
      <h4>
        {name}
        {title && (
          <>
            <span className="separator"> | </span> {title}
          </>
        )}
      </h4>
      <div className="bio">
        {headshot && (
          <Headshot>
            <Img fluid={headshot.asset.fluid} />
          </Headshot>
        )}
        {bio && <p>{bio}</p>}
      </div>
    </PersonStyles>
  );
};

export default Person;
