import styled, { css } from "styled-components";

export const FooterStyles = css`
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--grey-300);
    &:hover,
    &:active {
      color: white;
    }
  }
`;
