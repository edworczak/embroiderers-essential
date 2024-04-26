import { faBagShopping, faBoxOpen, faBrush, faPalette, faPenRuler } from "@fortawesome/free-solid-svg-icons";

import { Row } from "../app/app.styled";
import IconButton from "../components/icon-button/icon-button";
import List from "../components/list/list";
import ProjectsList from "../components/projects-list/projects-list";
import Welcome from "../components/welcome/welcome";
import pl from "../data/pl";

const Home = () => {
	return (
		<>
			<Row>
				<h1>embroidery essential</h1>
			</Row>
			<Row $background={"white"}>
				<Welcome />
			</Row>
			<Row>
				<h2>{pl.projects.openProjects}</h2>
				<ProjectsList isOpenProjects={true} />
			</Row>
		</>
	);
};

export default Home;
