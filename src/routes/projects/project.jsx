import { useEffect, useState } from "react";

import { Row } from "../../app/app.styled";
import Colour from "../../components/colour/colour";
import List from "../../components/list/list";
import colours from "../../data/colours";
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
			<>
				<Row $border={theme.colours.white}>
					<h1>{project.name}</h1>
				</Row>
				<Row>
					<h2>thread colours</h2>
					{project.threads && (
						<List>
							{project.threads.map((thread) => {
								const colour = colours.find((colour) => {
									return colour.id === thread.id;
								});

								return <Colour key={colour.id} colour={colour} noSubstitutes={true} smallColourCard={true} />;
							})}
						</List>
					)}
				</Row>
			</>
		)
	);
};

export default ProjectInfoPage;
