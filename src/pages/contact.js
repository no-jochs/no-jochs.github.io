import React from "react";
import { Page, ContactSection } from "gatsby-theme-portfolio-minimal";
import Layout from "../components/layout";

export default function ContactPage() {
  return (
    <Layout
      seoTitle="Contact Information"
      noIndex={false}
      useTitleTemplate={true}
    >
      <Page useSplashScreenAnimation>
        <ContactSection heading="Contact Information" sectionId="contact" />
      </Page>
    </Layout>
  );
}
