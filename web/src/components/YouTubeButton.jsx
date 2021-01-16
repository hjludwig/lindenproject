import React from "react";
import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";

const Button = styled.a`
  background: #ff0000;
  border-color: #ff0000;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  /* justify-content: space-around; */

  svg {
    height: 2em;
    width: 2em;
    margin-right: 1em;
    margin-left: -1em;
  }
  &:visited {
    color: white;
    border-color: #ff3030;
  }
  &:hover,
  &:active {
    background: #ff3030;
    border-color: #ff3030;
    color: white;
  }
`;

const YouTubeButton = ({ url }) => {
  return (
    <Button href={url} className="button" target="blank">
      <FaYoutube /> Watch Now
    </Button>
  );
};

export default YouTubeButton;
