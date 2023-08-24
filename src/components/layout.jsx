import React from "react";
import { Seo } from "gatsby-theme-portfolio-minimal";
import { Helmet } from "react-helmet";

export default function Layout({ seoTitle, children }) {
  return (
    <>
      <Helmet></Helmet>
      <Seo title={seoTitle} useTitleTemplate={true} noIndex={true} />
      {children}
    </>
  );
}
