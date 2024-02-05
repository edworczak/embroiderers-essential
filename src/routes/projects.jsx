import { Row } from "../app/app.styled";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";

const ProjectsPage = () => {
	return (
		<>
			<Row>
				<h1>{pl.projects.title}</h1>
				<p>{pl.projects.null}</p>
			</Row>
			<Row>
				<h2>{pl.projects.openProjects}</h2>
				<ProjectsList isOpenProjects={true} />
			</Row>
			<Row>
				<h2>{pl.projects.finishedProjects}</h2>
				<ProjectsList isFinishedProjects={true} />
			</Row>
		</>
	);
};

export default ProjectsPage;
