import { useEffect } from "react";

import dummyUser from "../../data/dummyUser";
import { openProjectsCounterListener } from "../../events";
import ProjectButton from "../project-button/project-button";
import { ProjectListScroll, ProjectsListWrapper } from "./projects-list.styled";

const ProjectsList = () => {
  const projects = Object.values(dummyUser.projects);
  let openProjects = [];
  let openProjectsCounter = 0;

  projects.forEach((project) => {
    if (project.finishDate) {
      openProjectsCounter++;
      openProjects.push(project);
    }
  });

  useEffect(() => {
    openProjectsCounterListener.dispatch("counting", {
      openProjectsCount: openProjectsCounter,
    });
  }, []);

  return (
    <ProjectListScroll>
      <ProjectsListWrapper>
        {projects.map((project) => {
          if (!project.finishDate) {
            return <ProjectButton key={project.id} project={project} />;
          }
        })}
      </ProjectsListWrapper>
    </ProjectListScroll>
  );
};

export default ProjectsList;
