import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import SocialIcon from "../SocialIcon";
import { FooterLink, FooterStyles } from "./Footer.elements";

const Wrapper = styled.div`
  ${FooterStyles}
`;
const SocialIcons = styled.ul`
  display: flex;
  margin-bottom: 0.5em;
`;
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
    <Wrapper>
      <h4>Get in touch</h4>
      <SocialIcons>
        {links.map(link => (
          <li>
            <FooterIcon key={link._key} link={link} />
          </li>
        ))}
      </SocialIcons>
      <FooterLink as={Link} to="/contact">
        Contact Us
      </FooterLink>
    </Wrapper>
  );
};

export default Follow;
