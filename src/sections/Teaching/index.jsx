import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { useLocalDataSource } from "./data";
import * as classes from "./style.module.css";
import Video from "../../../components/video";

export function TeachingSection(props) {
  const response = useLocalDataSource();
  const data = response.allTeachingMarkdown.sections[0];
  console.dir(data);
  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div className={classes.Teaching}>
          <div
            className={classes.Description}
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
          <Animation type="fadeLeft" delay={200}>
            <div className={classes.ImageWrapper}>
              <Video videoSrcURL={data.frontmatter.videoSrcURL} />
            </div>
          </Animation>
        </div>
      </Section>
    </Animation>
  );
}
