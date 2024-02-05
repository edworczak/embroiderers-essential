import PropTypes from "prop-types";

import dummyUser from "../../data/dummyUser";
import ProjectButton from "../project-button/project-button";
import { ProjectsListWrapper } from "./projects-list.styled";

const ProjectsList = (props) => {
	const { isOpenProjects = false, isFinishedProjects = false } = props;
	const projects = Object.values(dummyUser.projects);

	if (!projects.length) return;

	return (
		<ProjectsListWrapper>
			{projects.map((project) => {
				if (!isOpenProjects && !isFinishedProjects) {
					return <ProjectButton key={project.id} project={project} />;
				} else if (isOpenProjects && !project.finishDate) {
					return <ProjectButton key={project.id} project={project} />;
				} else if (isFinishedProjects && project.finishDate) {
					return <ProjectButton key={project.id} project={project} />;
				}
			})}
		</ProjectsListWrapper>
	);
};

ProjectsList.propTypes = {
	isOpenProjects: PropTypes.bool,
	isFinishedProjects: PropTypes.bool,
};

export default ProjectsList;
