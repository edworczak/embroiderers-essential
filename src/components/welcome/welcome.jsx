import { faBagShopping, faCircleCheck, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import InfoParagraph from "./partials/info-paragraph";
import { InfoWrapper } from "./welcome.styled";

const Welcome = () => {
	const shoppingCount = useSelector((state) => state.shoppingListItemsCount.value);
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	return (
		<div>
			<h1>
				{pl.home.welcome} {dummyUser.user.name}
			</h1>
			<InfoWrapper>
				<InfoParagraph
					icon={faCircleHalfStroke}
					textBefore={pl.home.openProjectsWelcome.textBefore}
					number={openProjectsCount < 10 ? openProjectsCount : "10+"}
					textsAfter={pl.home.openProjectsWelcome.textAfter}
				/>
				<InfoParagraph
					icon={faCircleCheck}
					textBefore={pl.home.finishedProjectsWelcome.textBefore}
					number={finishedProjectsCount}
					textsAfter={pl.home.finishedProjectsWelcome.textAfter}
				/>
				<InfoParagraph
					icon={faBagShopping}
					textBefore={pl.home.shoppingWelcome.textBefore}
					verbs={pl.home.shoppingWelcome.verbs}
					number={shoppingCount}
					textsAfter={pl.home.shoppingWelcome.textAfter}
				/>
			</InfoWrapper>
		</div>
	);
};

export default Welcome;
