import { Link } from "gatsby";
import React from "react";
import { Button } from "../Button";
import styled from "styled-components";
import { FooterLink, FooterStyles } from "./Footer.elements";

const Wrapper = styled.div`
  ${FooterStyles}
`;

const Support = () => {
  return (
    <Wrapper>
      <h4>Support Us</h4>
      <p>
        The Linden Project is made possible thanks to the generous support of
        our donors.
      </p>
      <p>
        <FooterLink as={Link} to="/donors">
          Our Supporters
        </FooterLink>
      </p>
      <Button primary="true" as={Link} to="/donate">
        Donate
      </Button>
    </Wrapper>
  );
};

export default Support;
