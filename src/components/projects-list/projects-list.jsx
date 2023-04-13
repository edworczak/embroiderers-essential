import { useEffect } from "react";

import dummyUser from "../../data/dummyUser";
import { openProjectsCounterListener } from "../../events";
import ListScrollX from "../list-scroll-x/list-scroll-x";
import ProjectButton from "../project-button/project-button";

const ProjectsList = () => {
	const projects = Object.values(dummyUser.projects);
	let openProjectsCounter = 0;

	projects.forEach((project) => {
		if (project.finishDate) {
			openProjectsCounter++;
		}
	});

	useEffect(() => {
		openProjectsCounterListener.dispatch("counting", {
			openProjectsCount: openProjectsCounter,
		});
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
