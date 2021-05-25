import { css } from "styled-components";

export const centered = css`
  max-width: 1280px;
  margin-left: auto;
  margin: 20rem auto;
  padding: 0 2.5%;
  @media screen and (max-width: 550px) {
    margin: 8rem auto;
  }
`;

export const centeredSmall = css`
  max-width: 80ch;
  margin: 20rem auto;
  padding: 0 2.5%;
  @media screen and (max-width: 550px) {
    margin: 8rem auto;
  }
`;

export const largeText = css`
  font-size: 2.8rem;
  line-height: 1.5;
  color: var(--grey-500);
  font-family: "Playfair display", serif;
`;

export const breakpoints = {
  mobile() {
    return `@media screen and (max-width: 400px)`;
  },
  largeMobile() {
    return `@media screen and (max-width: 550px)`;
  },
  tablet() {
    return `@media screen and (max-width: 750px)`;
  },
  smallDesktop() {
    return `@media screen and (max-width: 1000px)`;
  },
};
