import React from "react";
import { AboutSection } from "gatsby-theme-portfolio-minimal";
import { Page } from "gatsby-theme-portfolio-minimal";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout seoTitle="About" noIndex={false} useTitleTemplate={true}>
      <Page>
        <AboutSection sectionId="about" heading="About" />
      </Page>
    </Layout>
  );
}
