import { useSelector } from "react-redux";

import pl from "../../data/pl";
import Counter from "../_common/counter/counter";

const Welcome = () => {
	const shoppingCount = useSelector((state) => state.shoppingListItemsCount.value);
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	return (
		<>
			<Counter counterNumber={shoppingCount} text={pl.shoppingList.title} />
			<Counter counterNumber={openProjectsCount} text={pl.projects.openProjects} />
			<Counter counterNumber={finishedProjectsCount} text={pl.projects.finishedProjects} />
		</>
	);
};

export default Welcome;
