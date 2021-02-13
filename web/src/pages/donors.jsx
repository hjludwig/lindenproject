import { graphql, Link } from "gatsby";
import React from "react";
import getSeason from "../utils/getSeason";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Season from "../components/donorsPage/Season";

import styled from "styled-components";
import { largeText, centered } from "../styles/mixins";
import { Button } from "../components/Button";

const Wrapper = styled.section`
  ${centered}
  text-align: center;
`;
const Intro = styled.div`
  p {
    ${largeText}
  }
  margin: 0 auto;
  max-width: 80ch;
  padding: 8rem 0;
  border-bottom: 1px solid var(--grey-300);
`;

const DonorsPage = ({ data }) => {
  const donors = data.donors.nodes;

  //   Add season(s) to each donor based on date of donation
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

  // Group donors into season groups (some donors will appear in multiple seasons)

  const seasons = [];
  const seasonsNeeded = [];

  donorsWithSeasons.forEach(donor => {
    donor.seasons.forEach(season => {
      if (!seasonsNeeded.includes(season)) {
        seasonsNeeded.push(season);
      }
    });
  });

  seasonsNeeded.sort().reverse();

  seasonsNeeded.forEach(season => {
    const theSeason = {};
    theSeason.donors = donorsWithSeasons.filter(donor =>
      donor.seasons.includes(season)
    );
    theSeason.label = season;
    seasons.push(theSeason);
  });

  return (
    <Layout>
      <Wrapper>
        <SEO title="Donors" />
        <h1>Our Supporters</h1>
        <Intro>
          <p>
            We are very grateful to all those who have contributed to making our
            performances possible.
          </p>
          <p>
            If you would like to support us, please consider making a donation.
          </p>
          <Button primary="true" as={Link} to="/donate">
            Donate
          </Button>
        </Intro>
        {seasons.map(season => {
          return (
            <Season
              key={season.label}
              label={season.label}
              donors={season.donors}
            />
          );
        })}
      </Wrapper>
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
