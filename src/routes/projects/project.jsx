import { useEffect, useState } from "react";

import { HeadingPrimary, HeadingSecondary, Row } from "../../app/app.styled";
import Colour from "../../components/colour/colour";
import TableBody from "../../components/common/table/table-body";
import TableRow from "../../components/common/table/table-row";
import List from "../../components/list/list";
import colours from "../../data/colours";
import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import { theme } from "../../shared-styles/theme.styled";
import { ProjectHeader, ProjectImageWrapper } from "./project.styled";

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
				<ProjectHeader $border={theme.colours.white} $useFlex={true} $background={"white"}>
					<ProjectImageWrapper>
						<img src={project.img ? project.img : theme.decorations.defaultImages.project} alt={"Zdjęcie projektu"} />
					</ProjectImageWrapper>
					<Row>
						<HeadingPrimary $marginBottom={true}>{project.name}</HeadingPrimary>
						<TableBody colourRows={true}>
							{project.startDate && <TableRow label={pl.project.start.default} text={project.startDate} />}
							{project.finishDate && <TableRow label={pl.project.finish.default} text={project.finishDate} />}
							{project.time && <TableRow label={pl.project.time.default} text={project.time} />}
							{project.hoop && <TableRow label={pl.project.hoop.default} text={project.hoop} />}
							{project.fabric && <TableRow label={pl.project.fabric.default} text={project.fabric} />}
						</TableBody>
					</Row>
				</ProjectHeader>
				<Row>
					<HeadingSecondary>thread colours</HeadingSecondary>
					{project.threads && (
						<List numberOfColumns={3}>
							{project.threads.map((thread) => {
								const colour = colours.find((colour) => {
									return colour.id === thread.id;
								});

								if (!colour.id) return;

								return (
									<Colour
										key={colour.id}
										colourID={colour.id}
										noSubstitutes={true}
										smallColourCard={true}
										description={thread.description}
										smallButtons={true}
										verticalCardLayout={true}
										editCTA={true}
										cartCTA={true}
									/>
								);
							})}
						</List>
					)}
				</Row>
			</>
		)
	);
};

export default ProjectInfoPage;
