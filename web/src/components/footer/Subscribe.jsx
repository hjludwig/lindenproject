import React from "react";
import MailchimpSignup from "../MailchimpSignup";
import styled from "styled-components";
import { FooterStyles } from "./Footer.elements";

const Wrapper = styled.div`
  ${FooterStyles}
`;

const Subscribe = () => {
  return (
    <Wrapper>
      <h4>Subscribe</h4>
      <p>
        Sign up for our email newsletter for concert announcements, reminders,
        and other good stuff.
      </p>
      <MailchimpSignup />
    </Wrapper>
  );
};

export default Subscribe;
