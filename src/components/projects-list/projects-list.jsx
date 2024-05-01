import PropTypes from "prop-types";

import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import List from "../list/list";
import ProjectButton from "../project-button/project-button";

const ProjectsList = (props) => {
	const { isOpenProjects = false, isFinishedProjects = false } = props;
	const projects = Object.values(dummyUser.projects);

	if (!projects.length) return <p>{pl.projects.null}</p>;

	return (
		<List numberOfColumns={2} maxColumns={2}>
			{projects.map((project) => {
				if (!isOpenProjects && !isFinishedProjects) {
					return <ProjectButton key={project.id} project={project} />;
				} else if (isOpenProjects && !project.finished) {
					return <ProjectButton key={project.id} project={project} />;
				} else if (isFinishedProjects && project.finished) {
					return <ProjectButton key={project.id} project={project} />;
				}
			})}
		</List>
	);
};

ProjectsList.propTypes = {
	isOpenProjects: PropTypes.bool,
	isFinishedProjects: PropTypes.bool,
};

export default ProjectsList;
