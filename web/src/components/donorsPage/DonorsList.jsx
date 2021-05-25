import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const List = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 0;
  }
`;
const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;

const Logo = styled.div`
  width: 24rem;
  padding: 1rem 3rem;
  filter: saturate(0);
`;
const Name = styled.div``;

const Wrapper = styled.div`
  margin-top: 3em;
`;

const flexStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const DonorsList = ({ donors, label }) => {
  return (
    donors.length !== 0 && (
      <Wrapper>
        <Heading>{label}</Heading>
        <List style={donors[0].donorType[0] === "individual" || flexStyles}>
          {donors.map(donor => {
            const { name, id, logo } = donor;
            return (
              <li key={id}>
                {logo ? (
                  <Logo key={id}>
                    <Img fluid={logo.asset.fluid} alt={name} />
                  </Logo>
                ) : (
                  <Name key={id}>{name}</Name>
                )}
              </li>
            );
          })}
        </List>
      </Wrapper>
    )
  );
};

export default DonorsList;
