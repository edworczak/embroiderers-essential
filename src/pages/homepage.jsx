import { useEffect, useState } from "react";

import { Section } from "../App.styled";
import ProjectsList from "../components/projects-list/projects-list";
import Welcome from "../components/welcome/welcome";
import pl from "../data/pl";
import { openProjectsCounterListener } from "../events";

const Homepage = () => {
	const [openProjectsCount, setOpenProjectsCount] = useState(0);

	useEffect(() => {
		openProjectsCounterListener.on("counting", (data) => {
			const openProjectsCount = data.openProjectsCount;
			setOpenProjectsCount(openProjectsCount);
		});
	}, []);

	return (
		<div>
			<Section>
				<Welcome />
			</Section>
			<Section>
				<h2>
					{pl.home.openProjects} {openProjectsCount}
				</h2>
				<ProjectsList />
			</Section>
		</div>
	);
};

export default Homepage;
