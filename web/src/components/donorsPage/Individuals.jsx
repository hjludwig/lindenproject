import React from "react";

const Individuals = ({ donors }) => {
  return (
    <div>
      <p>Here are the individuals</p>
      {donors.map(donor => {
        const { name, id, donations } = donor;
        return <p>{name}</p>;
      })}
    </div>
  );
};

export default Individuals;
