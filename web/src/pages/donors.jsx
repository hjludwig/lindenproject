import { graphql } from "gatsby";
import React from "react";
import Individuals from "../components/donorsPage/Individuals";
import getSeason from "../utils/getSeason";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const DonorsPage = ({ data }) => {
  const donors = data.donors.nodes;
  const donorsWithSeasons = donors.map(donor => {
    donor.seasons = [];
    donor.donations.forEach(donation => {
      const date = new Date(donation.date);
      const season = getSeason(date);
      if (!donor.seasons.includes(season)) {
        donor.seasons.push(season);
      }
    });
    return donor;
  });
  console.log(donorsWithSeasons);

  //   TODO: Divide donors up into season groups
  //          Divide groups into individuals/businesses/agencies

  const individuals = donors.filter(
    donor => donor.donorType[0] === "individual"
  );
  const businesses = donors.filter(donor => donor.donorType[0] === "business");
  const agencies = donors.filter(
    donor => donor.donorType[0] === "grantingAgency"
  );

  return (
    <Layout>
      <SEO title="Donors" />
      <h1>Donors</h1>
      <Individuals donors={individuals} />
    </Layout>
  );
};

export default DonorsPage;

export const query = graphql`
  query {
    donors: allSanityDonor {
      nodes {
        name
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        donations {
          amount
          date
          _key
        }
        donorType
        id
      }
    }
  }
`;
