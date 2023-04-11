import { Section } from "../App.styled";
import ProjectsList from "../components/projects-list/projects-list";
import Welcome from "../components/welcome/welcome";
import pl from "../data/pl";

const Homegape = () => {
  return (
    <div>
      <Section>
        <Welcome />
      </Section>
      <Section>
        <h2>{pl.home.openProjects}</h2>
        <ProjectsList />
      </Section>
    </div>
  );
};

export default Homegape;
