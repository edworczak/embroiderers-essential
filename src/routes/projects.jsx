import { Section } from "../app/app.styled";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";

const ProjectsPage = () => {
	return (
		<>
			<Section>
				<h1>{pl.projects.title}</h1>
				<p>{pl.projects.null}</p>
			</Section>
			<Section>
				<h2>{pl.projects.openProjects}</h2>
				<ProjectsList />
			</Section>
			<Section>
				<h2>{pl.projects.finishedProjects}</h2>
				<ProjectsList />
			</Section>
		</>
	);
};

export default ProjectsPage;
