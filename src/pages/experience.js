import React from "react";
import { Page } from "gatsby-theme-portfolio-minimal";
import { ProjectsSection } from "../gatsby-theme-portfolio-minimal/sections/Projects";
import Layout from "../components/layout";

export default function ExperiencePage() {
  return (
    <Layout
      seoTitle="Professional Experience"
      noIndex={false}
      useTitleTemplate={true}
    >
      <Page>
        <ProjectsSection
          sectionId="experience"
          heading="Professional Experience"
        />
      </Page>
    </Layout>
  );
}
