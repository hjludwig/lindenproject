import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Events from "../components/Events";
import Hero from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <Hero />
    <SEO title="Home" />
    <Events />
  </Layout>
);

export default IndexPage;
