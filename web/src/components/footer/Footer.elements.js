import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/mixins";

export const FooterStyles = css`
  ul {
    list-style: none;
  }

  ${breakpoints.largeMobile} {
    border-top: 1px solid var(--grey-700);
    padding-top: 4rem;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--grey-300);
  &:hover,
  &:active {
    color: white;
  }
  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-left: 0.75rem solid var(--lp-green);
    border-bottom: 0.5rem solid transparent;
    padding-right: 0.5em;
    display: inline-block;
    transform: translateY(-2px);
  }
`;
