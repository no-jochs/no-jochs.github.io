import React from "react";
import { Page } from "gatsby-theme-portfolio-minimal";
import { ContactSection } from "../gatsby-theme-portfolio-minimal/sections/Contact";
import Layout from "../components/layout";

export default function ContactPage() {
  return (
    <Layout seoTitle="Contact">
      <Page useSplashScreenAnimation>
        <ContactSection sectionId="contact-section" />
      </Page>
    </Layout>
  );
}
