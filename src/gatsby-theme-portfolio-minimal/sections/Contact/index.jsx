import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Contact/data";
import { BsDownload } from "@react-icons/all-files/bs/BsDownload";
import * as classes from "./style.module.css";

export function ContactSection(props) {
  const response = useLocalDataSource();
  const data = response.allContactJson.sections[0];

  return (
    <Animation type="fadeUp">
      <Section
        anchor={props.sectionId}
        heading={props.heading}
        additionalClasses={[classes.Contact]}
      >
        {data.description && (
          <p className={classes.Description}>{data.description}</p>
        )}
        <ul id="contact-reason-list">
          {data.contact_reasons.map((r) => {
            return <li>{r.reason}</li>;
          })}
        </ul>
        <div className={classes.Profile}>
          {data.image.src && (
            <GatsbyImage
              className={classes.Avatar}
              image={data.image.src.childImageSharp.gatsbyImageData}
              alt={data.image.alt || `Profile ${data.name}`}
            />
          )}
          <div className={classes.ContactDetails}>
            <div className={classes.Name}>{data.name}</div>
            <u>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </u>
            <div>
              <u>
                <a href="tel:{data.phone}">(805) 368-9779</a>
              </u>
            </div>
          </div>
        </div>
        {data.socialProfiles && (
          <SocialProfiles
            from={data.socialProfiles.from}
            showIcon={data.socialProfiles.showIcons}
          />
        )}
        <h3>Cryptographic Keys</h3>
        <table>
          <caption>PGP Key Details</caption>
          <colgroup>
            <col span="1" className="userId" />
            <col span="2" className={classes.UserDetails} />
            <col span="1" className={classes.expireCol} />
            <col span="1" align="center" className={classes.keyDownload} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Key ID</th>
              <th scope="col">Key Type</th>
              <th scope="col">Expires</th>
              <th scope="col" className={classes.keyDownload}>
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td className="userId">john@johnochs.io</td>
              <td className="gpg-detail">0xFCE3D854</td>
              <td className="gpg-detail">ED25519</td>
              <td className="gpg-detail">2024-09-02</td>
              <td align="center">
                <a
                  href="https://cdn.johnochs.io/downloads/publickey.john@johnochs.io-63caa039fb9142ecedba5d6994fcf6f8fce3d854.asc"
                  download={`publickey.john@johnochs.io-63caa039fb9142ecedba5d6994fcf6f8fce3d854.asc`}
                >
                  <BsDownload />
                </a>
              </td>
            </tr>
            <tr className="row">
              <td className="userId">code@johnochs.io</td>
              <td className="gpg-detail">0x8A59670E</td>
              <td className="gpg-detail">ED25519</td>
              <td className="gpg-detail">Never</td>
              <td align="center">
                <a
                  href="https://cdn.johnochs.io/downloads/publickey.code@johnochs.io-6ee978d05852623735e50b283fef3b938a59670e.asc"
                  download={`publickey.code@johnochs.io-6ee978d05852623735e50b283fef3b938a59670e.asc`}
                >
                  <BsDownload />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </Animation>
  );
}
