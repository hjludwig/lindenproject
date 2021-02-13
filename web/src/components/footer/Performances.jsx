import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import styled from "styled-components";
import { FooterStyles } from "./Footer.elements";

const PerformancesStyles = styled.div`
  ${FooterStyles}
`;

const Performances = () => {
  return (
    <PerformancesStyles>
      <h4>Performances</h4>
      <ul>
        <li>
          <AnchorLink to="/#concerts">Current Season</AnchorLink>
        </li>
        <li>
          <Link to="/archive">Past Seasons</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://lindenproject.ticketleap.com/"
          >
            Tickets
          </a>
        </li>
      </ul>
    </PerformancesStyles>
  );
};

export default Performances;
