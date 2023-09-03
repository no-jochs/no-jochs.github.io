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
          <li>Full-time engineering/development positions.</li>
          <li>Freelance/Contract opportunities.</li>
          <li>
            Getting a brandnew project, website, or web-app off the ground.
          </li>
          <li>
            Consulting and data-driven strategies to improve bootcamp outcomes.
          </li>
          <li>
            Developing a personalized path towards build confidence in your
            development knowledge, and finding a path towards your first job in
            tech!
          </li>
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
              <td className="gpg-detail">0x8A59670E</td>
              <td className="gpg-detail">ED25519</td>
              <td className="gpg-detail">2024-08-24 00:00:00 UTC</td>
              <td align="center">
                <a
                  href="../../../../static/publickey.john@johnochs.io-63caa039fb9142ecedba5d6994fcf6f8fce3d854.asc"
                  download={`publickey.john@johnochs.io-63caa039fb9142ecedba5d6994fcf6f8fce3d854.asc`}
                >
                  <BsDownload />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <h4>
          john@johnochs.io •
          <span className="mono-span">
            63CAA039FB9142ECEDBA5D6994FCF6F8FCE3D854
          </span>
        </h4>
        <code>
          -----BEGIN PGP PUBLIC KEY BLOCK-----
          mDMEZJvSEBYJKwYBBAHaRw8BAQdAxYq4lyuQd1o1NiNqTLwQ6PpCzKzPNgbDtBsT
          dUZVRnO0I2pvaG5Aam9obm9jaHMuaW8gPGpvaG5Aam9obm9jaHMuaW8+iIwEEBYK
          AD4FgmSb0hAECwkHCAmQlPz2+Pzj2FQDFQgKBBYAAgECGQECmwMCHgEWIQRjyqA5
          +5FC7O26XWmU/Pb4/OPYVAAAa+IBAPDaHZcXguTNWDeP30zGz0iaY7Qh9K3rR7QI
          Abw98b7PAQCOEy9Utu+ybg2shVh/fnhb24BTDGr0HTsjeYulvfirBbg4BGSb0hAS
          CisGAQQBl1UBBQEBB0AWsNujINfVpyHjm4Si3MeGGigtzA/hrXUEPg7VyTGNRQMB
          CAeIeAQYFggAKgWCZJvSEAmQlPz2+Pzj2FQCmwwWIQRjyqA5+5FC7O26XWmU/Pb4
          /OPYVAAAVmUBAPE9JEfY2DiIX9B+w07IEdU/6E7ir253KKHXT+S9qaWfAPwJN+hD
          0uNcqbR3v7qcBcuNBqJ+vIGNRb+PzLv/9VvsCA== =aO7d -----END PGP PUBLIC KEY
          BLOCK-----
        </code>
        <br />
        <h4>
          code@johnochs.io •
          <span className="mono-span">
            6EE978D05852623735E50B283FEF3B938A59670E
          </span>
        </h4>
        <code>
          -----BEGIN PGP PUBLIC KEY BLOCK-----
          mDMEZOeu6xYJKwYBBAHaRw8BAQdAAMIV0nR5GQu3NWao/qW3IdqoGN8jcKpD66ue
          mVVXRWa0HEpvaG4gT2NocyA8Y29kZUBqb2hub2Nocy5pbz6IkwQTFgoAOwIbAwUL
          CQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgBYhBG7peNBYUmI3NeULKD/vO5OKWWcO
          BQJk57HfAAoJED/vO5OKWWcO7I4A/22Eg7n3gd4Mw9KpuWHWOYctj1zrgtQuZZzG
          NBHNtQ9SAP9lSGZjG7yf4PJvztacR9QbJvawc+H5DR1AmEZmGXGAArg4BGTnrusS
          CisGAQQBl1UBBQEBB0DrWj9x027nDQwzdF9/tDiXAMZ5yCumbhMfy5xlgjY6EQMB
          CAeIeAQYFgoAIAIbDBYhBG7peNBYUmI3NeULKD/vO5OKWWcOBQJk57G/AAoJED/v
          O5OKWWcOpaQBAPZ/zW/kCS4bIPYeobeLPiEwfkhvWRATes9LtqchqThTAQDzPPmZ
          ONM2bizmT/ymjueTAAbs0kR0bp/8OebHikdtDA== =/XZn -----END PGP PUBLIC KEY
          BLOCK-----
        </code> */}
      </Section>
    </Animation>
  );
}
