import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import SocialIcon from "../SocialIcon";

const FooterIcon = styled(SocialIcon)`
  color: var(--grey-300);
  &:hover {
    color: white;
  }
  .react-icon {
    width: 1.75em;
    height: 1.75em;
  }
`;

const Follow = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityOrganization {
        socialLinks {
          _key
          type
          url
        }
      }
    }
  `);
  const links = data.sanityOrganization.socialLinks;
  return (
    <div>
      <h4>Follow</h4>
      {links.map(link => (
        <FooterIcon key={link._key} link={link} />
      ))}
    </div>
  );
};

export default Follow;
