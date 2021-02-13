import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const List = styled.ul`
  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  justify-content: center; */
  list-style-type: none;
  li {
    margin-bottom: 0;
  }
`;
const Logo = styled.div`
  width: 24rem;
  padding: 3rem;
  filter: saturate(0);
`;
const Name = styled.div``;

const flexStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const DonorsList = ({ donors, label }) => {
  return (
    donors.length !== 0 && (
      <div>
        <h3>{label}</h3>
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
      </div>
    )
  );
};

export default DonorsList;
