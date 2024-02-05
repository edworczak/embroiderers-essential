import PropTypes from "prop-types";

import dummyUser from "../../data/dummyUser";
import ProjectButton from "../project-button/project-button";
import { ProjectsListWrapper } from "./projects-list.styled";

const ProjectsList = (props) => {
	const { isOpenProjects = false, isFinishedProjects = false } = props;
	const projects = Object.values(dummyUser.projects);

	return (
		<ProjectsListWrapper>
			{projects.map((project) => {
				if (
					(!isOpenProjects && !isFinishedProjects) ||
					(isOpenProjects && !project.finishDate) ||
					(isFinishedProjects && !project.finishDate)
				) {
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
