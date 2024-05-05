import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import List from "../list/list";
import ProjectButton from "../project-button/project-button";
import { updateFinishedProjectsCount } from "./slice/finished-projects-count";
import { updateOpenProjectsCount } from "./slice/open-projects-count";

const ProjectsList = (props) => {
	const { isOpenProjects = false, isFinishedProjects = false } = props;
	const dispatch = useDispatch();
	const projects = Object.values(dummyUser.projects);
	let openProjectsCount = 0;
	let finishedProjectsCount = 0;

	if (!projects.length) return <p>{pl.projects.null}</p>;

	projects.forEach((project) => {
		if (project.finishDate) {
			finishedProjectsCount++;
		} else {
			openProjectsCount++;
		}
	});

	useEffect(() => {
		dispatch(updateOpenProjectsCount(openProjectsCount));
		dispatch(updateFinishedProjectsCount(finishedProjectsCount));
	}, []);

	return (
		<List maxColumns={2}>
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
