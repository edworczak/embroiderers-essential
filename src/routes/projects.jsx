import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Row } from "../app/app.styled";
import IconButton from "../components/icon-button/icon-button";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";
import { theme } from "../shared-styles/theme.styled";

const ProjectsPage = () => {
	return (
		<>
			<Row $useFlex={true} $justify={"space-between"} $align={"center"} $border={theme.colours.white}>
				<h1>{pl.projects.title}</h1>
				<IconButton icon={faPlus} text={"nowy projekt"}/>
			</Row>
			<Row $border={theme.colours.white}>
				<h2>{pl.projects.openProjects}</h2>
				<ProjectsList isOpenProjects={true} />
			</Row>
			<Row $border={theme.colours.white}>
				<h2>{pl.projects.finishedProjects}</h2>
				<ProjectsList isFinishedProjects={true} />
			</Row>
			<Row>
				<h2>{pl.projects.title}</h2>
				<ProjectsList />
			</Row>
		</>
	);
};

export default ProjectsPage;
