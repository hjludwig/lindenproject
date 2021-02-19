import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import styled from "styled-components";
import { FooterLink, FooterStyles } from "./Footer.elements";

const PerformancesStyles = styled.div`
  ${FooterStyles}
`;

const Performances = () => {
  return (
    <PerformancesStyles>
      <h4>Performances</h4>
      <ul>
        <li>
          <FooterLink as={AnchorLink} to="/#concerts">
            Current Season
          </FooterLink>
        </li>
        <li>
          <FooterLink as={Link} to="/archive">
            Past Seasons
          </FooterLink>
        </li>
        <li>
          <FooterLink
            as="a"
            target="_blank"
            href="https://lindenproject.ticketleap.com/"
          >
            Tickets
          </FooterLink>
        </li>
      </ul>
    </PerformancesStyles>
  );
};

export default Performances;
