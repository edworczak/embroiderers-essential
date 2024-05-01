import { HeadingPrimary, HeadingSecondary, Row } from "../app/app.styled";
import ProjectsList from "../components/projects-list/projects-list";
import Welcome from "../components/welcome/welcome";
import pl from "../data/pl";

const Home = () => {
	return (
		<>
			<Row>
				<HeadingPrimary>embroidery essential</HeadingPrimary>
			</Row>
			<Row $background={"white"} $useFlex={true} $justify={"center"}>
				<Welcome />
			</Row>
			<Row>
				<HeadingSecondary>{pl.projects.openProjects}</HeadingSecondary>
				<ProjectsList isOpenProjects={true} />
			</Row>
		</>
	);
};

export default Home;
