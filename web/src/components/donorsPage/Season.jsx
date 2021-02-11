import React from "react";

import DonorsList from "./DonorsList";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--grey-300);
  padding: 8rem 0;
  &:last-child {
    border-bottom: none;
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
