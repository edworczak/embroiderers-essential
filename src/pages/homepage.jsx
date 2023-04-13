import { Section } from "../App.styled";
import ProjectsList from "../components/projects-list/projects-list";
import Welcome from "../components/welcome/welcome";
import pl from "../data/pl";

const Homepage = () => {
	return (
		<div>
			<Section>
				<Welcome />
			</Section>
			<Section>
				<h2>{pl.openProjects}</h2>
				<ProjectsList />
			</Section>
			<Section>
				<h2>{pl.shoppingList}</h2>
			</Section>
		</div>
	);
};

export default Homepage;
