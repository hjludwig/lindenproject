import React from "react";

const Performer = ({ performer }) => {
  const { name, _key, instrument, photo, bio } = performer;
  return (
    <div className="performer" key={_key}>
      <h4>
        {name}
        <span className="separator"> | </span>
        {instrument}
      </h4>
    </div>
  );
};

export default Performer;
