export const centered = () => {
  return `max-width: 1280px; margin-left: auto; margin-right: auto;`;
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
