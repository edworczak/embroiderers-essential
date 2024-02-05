import { useEffect } from "react";
import { useDispatch } from "react-redux";

import dummyUser from "../../data/dummyUser";
import ProjectButton from "../project-button/project-button";
import { ProjectsListWrapper } from "./projects-list.styled";
import { updateFinishedProjectsCount } from "./slice/finished-projects-count";
import { updateOpenProjectsCount } from "./slice/open-projects-count";

const ProjectsList = () => {
	const dispatch = useDispatch();
	const projects = Object.values(dummyUser.projects);
	let openProjectsCount = 0;
	let finishedProjectsCount = 0;

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
		<ProjectsListWrapper>
			{projects.map((project) => {
				if (project.startDate) {
					return <ProjectButton key={project.id} project={project} />;
				}
			})}
		</ProjectsListWrapper>
	);
};

export default ProjectsList;
