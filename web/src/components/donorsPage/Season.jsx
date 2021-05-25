import React from "react";

import DonorsList from "./DonorsList";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border-bottom: 1px solid var(--grey-300); */
  padding: 0 0 8rem 0;
  &:last-child {
    border-bottom: none;
  }
  h2 {
    /* transform: translateY(-0.75em); */
    position: relative;
    font-family: "Lato", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 3.6rem;
    &:before,
    &:after {
      @media screen and (min-width: 550px) {
        content: "";
        display: block;
        border-top: 1px solid var(--grey-300);
        position: absolute;
        top: 2rem;

        width: 30%;
      }
      @media screen and (min-width: 1100px) {
        width: 40%;
      }
    }
    &:after {
      right: 0;
    }
  }
`;

const Season = ({ donors, label }) => {
  const individuals = donors.filter(
    donor => donor.donorType[0] === "individual"
  );
  const businesses = donors.filter(donor => donor.donorType[0] === "business");
  const agencies = donors.filter(
    donor => donor.donorType[0] === "grantingAgency"
  );

  return (
    <Wrapper>
      <h2>{label}</h2>
      <DonorsList donors={individuals} label="Individuals" />
      <DonorsList donors={businesses} label="Businesses" />
      <DonorsList donors={agencies} label="Agencies" />
    </Wrapper>
  );
};

export default Season;
