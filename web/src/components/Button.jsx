import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  padding: 0 1.5em;
  line-height: 2.5;
  border-radius: 999px;
  display: inline-block;

  /* display: flex; */
  /* align-items: center; */
  background: ${props => (props.primary ? "var(--lp-green)" : "none")};
  border: 1px solid;
  border-color: ${props =>
    props.primary ? "var(--lp-green)" : "var(--grey-300)"};
  .react-icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 1rem;
    vertical-align: middle;
    transform: translateY(-1px);
    /* margin-left: -1rem; */
  }
  color: ${props => (props.primary ? "white" : "inherit")};
  &:hover {
    background: ${props => (props.primary ? "var(--lp-light-green)" : "none")};
    border-color: ${props =>
      props.primary ? "var(--lp-light-green)" : "var(--grey-400)"};
    color: ${props => (props.primary ? "white" : "inherit")};
  }
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;
