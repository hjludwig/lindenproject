import React from "react";
import PerformerLink from "./PerformerLink";
import styled from "styled-components";

const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--grey-300);
  border-bottom: 1px solid var(--grey-300);
  padding: 2rem 1rem;
  margin-bottom: 4rem;
  li {
    margin: 0;
    line-height: 1;
  }
  h5 {
    font-size: 0.8em;
    text-transform: uppercase;
    margin: 0;
    margin-right: 2rem;
  }
`;

const PerformerLinks = ({ links }) => {
  return (
    <LinkList className="links">
      <h5>Connect</h5>
      {links.map(link => {
        return (
          <li key={link._key}>
            <PerformerLink link={link} />
          </li>
        );
      })}
    </LinkList>
  );
};

export default PerformerLinks;
