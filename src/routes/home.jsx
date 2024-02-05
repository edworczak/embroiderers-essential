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
				<h2>{pl.tools.tools}</h2>
				<List column={false} centerItems={true} scroll={true}>
					<IconButton icon={faBagShopping} border={true} text={pl.tools.shoppingList} onClick={`shoppinglist`} />
					<IconButton icon={faPalette} border={true} text={pl.tools.palettes} onClick={`palettes`} />
					<IconButton onClick={`projects`} icon={faPenRuler} border={true} text={pl.tools.projects} />
					<IconButton icon={faBoxOpen} border={true} text={pl.tools.threads} onClick={`threads`} />
					<IconButton icon={faBrush} border={true} text={pl.tools.substitutes} onClick={`substitutes`} />
				</List>
			</Row>
			<Row>
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
