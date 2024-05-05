import { useSelector } from "react-redux";

import Counter from "../components/_common/counter/counter";
import Heading from "../components/_common/layout/heading";
import { HeadingPrimaryStyled } from "../components/_common/layout/layout.styled";
import Row from "../components/_common/layout/row";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";

const Home = () => {
	const shoppingCount = useSelector((state) => state.shoppingListItemsCount.value);
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	return (
		<>
			<Row>
				<HeadingPrimaryStyled>embroidery essential</HeadingPrimaryStyled>
			</Row>
			<Row $lightBackground={true} contentCentered={true} contentInRow={true} lightBackground={true}>
				<Counter counterNumber={openProjectsCount} text={pl.projects.openProjects} />
				<Counter counterNumber={finishedProjectsCount} text={pl.projects.finishedProjects} />
				<Counter counterNumber={shoppingCount} text={pl.shoppingList.title} />
			</Row>
			<Row>
				<Heading title={pl.projects.openProjects} secondary={true} />
				<ProjectsList isOpenProjects={true} />
			</Row>
		</>
	);
};

export default Home;
