import React, { useState } from "react";
import { Button } from "./Button";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";
import { breakpoints } from "../styles/mixins";

const EmailForm = styled.form`
  @media screen and (min-width: 350px) {
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 3fr 1fr;
    align-items: center;
  }
`;
const EmailInput = styled.input`
  color: var(--grey-600);
  padding: 0 1em !important;
  margin-bottom: 1em;
  height: auto !important;
  line-height: 2.5;
  border: none;
  border-radius: 999px;
  width: 100%;
  ${breakpoints.largeMobile} {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 350px) {
    border-radius: 999px 0 0 999px;
  }
`;
const EmailLabel = styled.label`
  grid-column: span 2;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.8em;
`;

const SubmitButton = styled(Button)`
  border-radius: 0 999px 999px 0;
  @media screen and (max-width: 350px) {
    width: 100%;
    border-radius: 999px;
  }
`;

const MailchimpSignup = () => {
  const [userEmail, setUserEmail] = useState("");
  //   const [result, setResult] = useState("");

  //   const handleSubmit = async e => {
  //     e.preventDefault();
  //     const result = await addToMailchimp(userEmail);
  //     console.log(result);
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(userEmail) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data);
      })
      .catch(() => {});
  };

  const handleChange = e => {
    setUserEmail(e.target.value);
  };
  return (
    <div>
      <EmailForm>
        <EmailLabel for="email">Your email</EmailLabel>
        <EmailInput
          name="email"
          type="email"
          placeholder="name@address.com"
          onChange={handleChange}
        />
        <SubmitButton primary onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </EmailForm>
    </div>
  );
};

export default MailchimpSignup;
