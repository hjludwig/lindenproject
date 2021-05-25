import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { centered, centeredSmall } from "../styles/mixins";
const Wrapper = styled.div`
  ${centeredSmall}
`;
const Form = styled.form`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
  input,
  textarea {
    padding: 0.5em;
    outline: 1px solid var(--light-grey);
    border: none;
    width: 100%;
    font-family: "Source Sans", sans-serif;
    color: var(--grey);
    &:focus {
      outline: 1px solid var(--lp-green);
    }
  }
  textarea {
    height: auto;
  }
  button {
    justify-self: flex-start;
  }
`;

const Name = styled.label`
  width: 100%;
  display: inline-block;
  margin-bottom: 1em;
`;
const Email = styled.label`
  width: 100%;
  display: inline-block;
  margin-bottom: 1em;
`;
const Message = styled.label`
  display: inline-block;
  width: 100%;
  grid-column: 1/-1;
  margin-bottom: 1em;
`;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
      <h1>Contact Us</h1>
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Name>
          Name
          <input type="text" name="name" id="name" />
        </Name>
        <Email>
          Email
          <input type="email" name="email" id="email" />
        </Email>
        <Message>
          Message
          <textarea name="message" id="message" rows="10" />
        </Message>
        <Button type="submit" primary>
          Send Message
        </Button>
      </Form>
    </Wrapper>
  </Layout>
);

export default ContactPage;
