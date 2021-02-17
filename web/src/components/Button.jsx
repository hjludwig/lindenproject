import styled from "styled-components";
import { breakpoints } from "../styles/mixins";

export const Button = styled.button`
  text-decoration: none;
  text-align: center;
  padding: ${props => (props.small ? "0 1.25em" : "0 1.5em")};
  margin-bottom: 1em;
  font-size: ${props => (props.small ? "1.4rem" : "inherit")};
  line-height: ${props => (props.small ? 2 : 2.5)};
  border-radius: 999px;
  display: inline-block;
  white-space: nowrap;
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
  ${breakpoints.largeMobile} {
    display: block;
    margin-right: 0;
    font-size: 1.6rem;
    padding: ${props => (props.small ? "0 1.25em" : "0 1.25em")};
  }
`;
