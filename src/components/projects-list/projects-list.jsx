import dummyUser from "../../data/dummyUser";
import ProjectButton from "../project-button/project-button";
import { ProjectListScroll, ProjectsListWrapper } from "./projects-list.styled";

const ProjectsList = () => {
  const projects = Object.values(dummyUser.projects);

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
