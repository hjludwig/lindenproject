import { Link } from "gatsby";
import React from "react";
import { Button } from "../Button";
import styled from "styled-components";
import { FooterStyles } from "./Footer.elements";

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
        <Link to="/donors">Our Supporters</Link>
      </p>
      <Button className="button" primary="true" as={Link} to="/donate">
        Donate
      </Button>
    </Wrapper>
  );
};

export default Support;
