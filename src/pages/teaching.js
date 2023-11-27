import React from "react";
import { Page } from "gatsby-theme-portfolio-minimal";
import { TeachingSection } from "../gatsby-theme-portfolio-minimal/sections/Teaching";
import Layout from "../components/layout";

export default function TeachingPage() {
  return (
    <Layout seoTitle="Teaching" noIndex={false} userTitleTemplate={true}>
      <Page useSplashScreenAnimation>
        <TeachingSection sectionId="teaching" heading="Teaching" />
      </Page>
    </Layout>
  );
}
