import { useSelector } from "react-redux";

import pl from "../../data/pl";
import InfoParagraph from "./partials/info-paragraph";
import { InfoWrapper } from "./welcome.styled";

const Welcome = () => {
	const shoppingCount = useSelector((state) => state.shoppingListItemsCount.value);
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	return (
		<InfoWrapper>
			<InfoParagraph text={pl.home.openProjectsWelcome} number={openProjectsCount < 10 ? openProjectsCount : "10+"} />
			<InfoParagraph text={pl.home.finishedProjectsWelcome} number={finishedProjectsCount} />
			<InfoParagraph text={pl.home.shoppingWelcome} number={shoppingCount} />
		</InfoWrapper>
	);
};

export default Welcome;
