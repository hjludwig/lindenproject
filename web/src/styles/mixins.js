export const centered = () => {
  return `
    max-width: 1280px; 
    margin-left: auto; 
    margin: 20rem auto;
    padding: 0 2.5%;
    `;
};

export const centeredSmall = () => {
  return `
  max-width: 80ch;
  margin: 20rem auto;
  padding: 0 2.5%`;
};

export const largeText = () => {
  return `
  font-size: 2.8rem;
  line-height: 1.5;
  color: var(--grey-500);
  font-family: "Playfair display", serif;
  `;
};

export const breakpoints = {
  mobile: function () {
    return `@media screen and (max-width: 400px)`;
  },
  largeMobile: function () {
    return `@media screen and (max-width: 550px)`;
  },
  tablet: function () {
    return `@media screen and (max-width: 750px)`;
  },
  smallDesktop: function () {
    return `@media screen and (max-width: 1000px)`;
  },
};
