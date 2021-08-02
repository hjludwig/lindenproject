import React from "react";
import { FaPaypal } from "react-icons/fa";
import { Button } from "../components/Button";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import styled from "styled-components";
import { centered } from "../styles/mixins";

const Wrapper = styled.section`
  ${centered}
`;

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" />
    <Wrapper>
      <h1>Donate</h1>
      <p>
        The Linden Project is a not-for-profit dedicated to presenting artsong
        to new audiences.
      </p>
      <p>Please consider supporting our work financially.</p>

      <Button
        primary
        target="_blank"
        as="a"
        href="https://www.paypal.com/biz/fund?id=YHC89ZMJXA5DC"
      >
        <FaPaypal /> Donate via Paypal
      </Button>
    </Wrapper>
  </Layout>
);

export default DonatePage;
