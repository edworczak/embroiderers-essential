import { useEffect } from "react";
import { useDispatch } from "react-redux";

import dummyUser from "../../data/dummyUser";
import ListScrollX from "../list-scroll-x/list-scroll-x";
import ProjectButton from "../project-button/project-button";
import { updateFinishedProjectsCount } from "./slice/finished-projects-count";
import { updateOpenProjectsCount } from "./slice/open-projects-count";

const ProjectsList = () => {
	const dispatch = useDispatch();
	const projects = Object.values(dummyUser.projects);
	let openProjects = 0;
	let finishedProjects = 0;

	projects.forEach((project) => {
		if (project.finishDate) {
			finishedProjects++;
		} else {
			openProjects++;
		}
	});

	useEffect(() => {
		dispatch(updateOpenProjectsCount(openProjects));
		dispatch(updateFinishedProjectsCount(finishedProjects));
	}, []);

	return (
		<ListScrollX>
			{projects.map((project) => {
				if (!project.finishDate) {
					return <ProjectButton key={project.id} project={project} />;
				}
			})}
		</ListScrollX>
	);
};

export default ProjectsList;
