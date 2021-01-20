import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  padding: 0 1.5em;
  line-height: 2.5;
  border-radius: 999px;
  display: flex;
  align-items: center;
  background: ${props => (props.primary ? "var(--lp-green)" : "none")};
  border: 1px solid var(--grey-300);
  border-color: ${props => (props.primary ? "var(--lp-green)" : "inherit")};
  .react-icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 1rem;
    /* margin-left: -1rem; */
  }
  color: ${props => (props.primary ? "white" : "inherit")};
  &:hover {
    background: ${props => (props.primary ? "var(--lp-light-green)" : "none")};
    border-color: ${props =>
      props.primary ? "var(--lp-light-green)" : "inherit"};
    color: ${props => (props.primary ? "white" : "inherit")};
  }
  /* margin-right: 1em; */
`;
