import React from "react";

const MapButton = ({ address }) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURI(
    address
  )}`;
  return (
    <div>
      <a href={url} target="blank" className="button">
        Map
      </a>
    </div>
  );
};

export default MapButton;
