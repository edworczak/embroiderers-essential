import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { CounterItem, HeadingRow, HeadingSecondary, Row } from "../app/app.styled";
import IconButton from "../components/icon-button/icon-button";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";
import { theme } from "../shared-styles/theme.styled";

const ProjectsPage = () => {
	return (
		<>
			<HeadingRow $useFlex={true} $justify={"space-between"} $align={"center"}>
				<h1>{pl.projects.title}</h1>
				<IconButton icon={faPlus} text={"nowy projekt"} />
			</HeadingRow>
			<Row>
				<HeadingSecondary>{pl.projects.openProjects}</HeadingSecondary>
				<ProjectsList isOpenProjects={true} />
			</Row>
			<Row $background={theme.colours.white} $useFlex={true} $justify={"center"}>
				<CounterItem>
					<span>{pl.projects.openProjects}:</span>
					<span>12</span>
				</CounterItem>
				<CounterItem>
					<span>{pl.projects.finishedProjects}:</span>
					<span>42</span>
				</CounterItem>
			</Row>
			<Row>
				<HeadingSecondary>{pl.projects.finishedProjects}</HeadingSecondary>
				<ProjectsList isFinishedProjects={true} />
			</Row>
		</>
	);
};

export default ProjectsPage;
