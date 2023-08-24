import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal";
import { Section } from "gatsby-theme-portfolio-minimal";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import {
  Button,
  ButtonType,
} from "gatsby-theme-portfolio-minimal/src/components/Button";
import { Project } from "../../components/Project";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Projects/data";
import * as classes from "./style.module.css";

export function ProjectsSection(props) {
  const response = useLocalDataSource();
  const data = response.allProjectsJson.sections[0];

  return (
    <Animation type="fadeIn">
      <Section anchor={props.sectionId} heading={props.heading}>
        <Slider additionalClasses={[classes.Projects]}>
          {data.projects.map((project, key) => {
            return project.visible ? (
              <Project key={key} index={key} data={project} />
            ) : null;
          })}
        </Slider>
        {data.button !== undefined && data.button.visible !== false && (
          <Animation className={classes.MoreProjects} type="fadeIn">
            <Button
              type={ButtonType.LINK}
              externalLink={true}
              url={data.button.url}
              label={data.button.label}
            />
          </Animation>
        )}
      </Section>
    </Animation>
  );
}
