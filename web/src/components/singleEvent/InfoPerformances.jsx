import React from "react";
import formatDate from "../../../../utils/formatDate";
import formatTime from "../../../../utils/formatTime";
import styled from "styled-components";

const PerformancesList = styled.ul`
  list-style-type: none;
`;

const InfoPerformances = ({ event }) => {
  const { performances, youTubeURL } = event;
  return (
    <div className="performances">
      <h5>Performances</h5>
      {performances.length === 0 ? (
        <p>Performance date and time TBA</p>
      ) : youTubeURL ? (
        <p>
          Premiering on YouTube {formatTime(performances[0].dateTime)}{" "}
          {formatDate(performances[0].dateTime)}.
          <p>
            <i>The performance will remain online after the premiere.</i>
          </p>
        </p>
      ) : (
        <PerformancesList>
          {performances.map(performance => {
            return (
              <li key={performance._key}>
                {formatTime(performance.dateTime)}{" "}
                {formatDate(performance.dateTime)}
              </li>
            );
          })}
        </PerformancesList>
      )}
    </div>
  );
};

export default InfoPerformances;
