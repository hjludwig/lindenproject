import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Events from "../components/home/Events";
import Hero from "../components/home/Hero";

const IndexPage = () => (
  <Layout isHome={true}>
    <Hero />
    <SEO title="Home" />
    <Events />
  </Layout>
);

export default IndexPage;
