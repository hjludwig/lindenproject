import React from "react";
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const SocialLink = styled.a`
  color: var(--grey-400);
  .react-icon {
    width: 1.5em;
    height: 1.5em;
  }
  margin-right: 1rem;
  &:hover,
  &:active {
    color: var(--grey-500);
  }
`;

const SocialIcon = ({ link, className }) => {
  const type = link.type[0];
  const url = link.url;
  const icon =
    type === "facebook" ? (
      <FaFacebook />
    ) : type === "twitter" ? (
      <FaTwitter />
    ) : type === "instagram" ? (
      <FaInstagram />
    ) : (
      <FaGlobe />
    );
  return (
    <SocialLink
      className={className}
      target="_blank"
      href={url}
      title={capitalize(type)}
    >
      {icon}
    </SocialLink>
  );
};

export default SocialIcon;
