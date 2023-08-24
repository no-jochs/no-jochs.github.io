import React from "react";
import { HeroSection, Page } from "gatsby-theme-portfolio-minimal";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout seoTitle="Home">
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
      </Page>
    </Layout>
  );
}
