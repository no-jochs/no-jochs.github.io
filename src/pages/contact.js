import React from "react";
import { Page, ContactSection } from "gatsby-theme-portfolio-minimal";
import Layout from "../components/layout";

export default function ContactPage() {
  return (
    <Layout seoTitle="Contact">
      <Page useSplashScreenAnimation>
        <ContactSection heading="Contact" sectionId="contact-section" />
      </Page>
    </Layout>
  );
}
