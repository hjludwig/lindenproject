import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    height: 2em;
    width: 2em;
    margin-right: 1em;
    margin-left: -1em;
  }
`;

const TicketsButton = ({ url }) => {
  return (
    <Button className="button button-primary" href={url} target="blank">
      <FaTicketAlt />
      Tickets
    </Button>
  );
};

export default TicketsButton;
