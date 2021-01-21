import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

const Venue = styled.div`
  p {
    margin-bottom: 0;
  }
`;
const VenueName = styled.p`
  margin-bottom: 0;
  font-weight: 700;
`;
const Address = styled.span`
  /* color: var(--grey-400); */
  font-size: 1.6rem;
  margin-right: 1rem;
`;
const MapButton = ({ address }) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURI(
    address
  )}`;
  return (
    <Button small as="a" href={url} target="blank">
      Map
    </Button>
  );
};

const InfoVenue = ({ event }) => {
  const { venue, venueAddress } = event;
  return (
    <Venue>
      <h5>Venue</h5>
      <VenueName>{venue}</VenueName>
      {venueAddress && (
        <>
          <Address>{venueAddress}</Address>
          <MapButton address={venueAddress} />
        </>
      )}
    </Venue>
  );
};

export default InfoVenue;
