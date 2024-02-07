import { useEffect, useState } from "react";

import { Row } from "../../app/app.styled";
import dummyUser from "../../data/dummyUser";
import { theme } from "../../shared-styles/theme.styled";

const ProjectInfoPage = () => {
	const projects = dummyUser.projects;
	const [project, setProject] = useState("");

	useEffect(() => {
		const pageParams = new URLSearchParams(window.location.search);
		setProject(
			projects.find((project) => {
				return project.id === pageParams.get("id");
			})
		);
	});

	return (
		project && (
			<Row $border={theme.colours.white}>
				<h1>{project.name}</h1>
			</Row>
		)
	);
};

export default ProjectInfoPage;
