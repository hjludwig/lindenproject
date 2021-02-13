import React, { useState } from "react";
import { Button } from "./Button";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";

const EmailForm = styled.form`
  display: flex;
  align-items: center;
`;
const EmailInput = styled.input.attrs(props => ({
  type: "email",
}))`
  color: var(--grey-600);
  border-radius: 999px 0 0 999px;
  padding: 0 1em !important;
  margin-bottom: 1em;
  height: auto !important;
  line-height: 2.5;
  border: none;
`;

const SubmitButton = styled(Button)`
  border-radius: 0 999px 999px 0;
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
        <EmailInput type="text" onChange={handleChange} />
        <SubmitButton primary onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </EmailForm>
    </div>
  );
};

export default MailchimpSignup;
