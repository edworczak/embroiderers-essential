import { useSelector } from "react-redux";

import { CounterItem } from "../../app/app.styled";
import pl from "../../data/pl";

const Welcome = () => {
	const shoppingCount = useSelector((state) => state.shoppingListItemsCount.value);
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	return (
		<>
			<CounterItem>
				<span>{pl.shoppingList.title}:</span>
				<span>{shoppingCount}</span>
			</CounterItem>
			<CounterItem>
				<span>{pl.projects.openProjects}:</span>
				<span>{openProjectsCount}</span>
			</CounterItem>
			<CounterItem>
				<span>{pl.projects.finishedProjects}:</span>
				<span>{finishedProjectsCount}</span>
			</CounterItem>
		</>
	);
};

export default Welcome;
