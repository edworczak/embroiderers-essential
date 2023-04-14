import { Section } from "../app/app.styled";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";

const ProjectsPage = () => {
	return (
		<>
			<Section>
				<h1>twoje projekty</h1>
			</Section>
			<Section>
				<h2>{pl.openProjects}</h2>
				<ProjectsList />
			</Section>
			<Section>
				<h2>{pl.tools.tools}</h2>
				<ProjectsList />
			</Section>
		</>
	);
};

export default ProjectsPage;
