import React from "react";
import { Page } from "gatsby-theme-portfolio-minimal";
import { TeachingSection } from "../gatsby-theme-portfolio-minimal/sections/Teaching";
import Layout from "../components/layout";

export default function TeachingPage() {
  return (
    <Layout seoTitle="Home">
      <Page useSplashScreenAnimation>
        <TeachingSection sectionId="hero" heading="Teaching" />
      </Page>
    </Layout>
  );
}
