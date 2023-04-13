import { faBagShopping, faCircleCheck, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import { theme } from "../../shared-styles/theme.styled";
import { IconWrapper, Info, InfoWrapper, NumberHighLight } from "./welcome.styled";

const Welcome = () => {
	// demo values
	const shoppingCount = useSelector((state) => state.shoppingListItemsCount.value);
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	const [openProjectsText, setOpenProjectsText] = useState();
	const [finishedProjectsText, setFinishedProjectsText] = useState();
	const [shoppingVerb, setShoppingVerb] = useState();
	const [shoppingText, setShoppingText] = useState();

	useEffect(() => {
		prepareWelcomeTexts();
	}, []);

	const prepareWelcomeTexts = () => {
		setOpenProjectsText(getPolishDeclination(openProjectsCount, pl.home.openProjectsWelcome.textAfter));
		setFinishedProjectsText(getPolishDeclination(finishedProjectsCount, pl.home.allProjectsWelcome.textAfter));
		setShoppingVerb(getVerb(shoppingCount, pl.home.shoppingWelcome.textAfter));
		setShoppingText(getPolishDeclination(shoppingCount, pl.home.shoppingWelcome.textAfter));
	};

	const getPolishDeclination = (value, texts) => {
		// polish declination override <3
		const number = Number(value);
		if (number === 0) {
			return texts.items0;
		} else if (number === 1) {
			return texts.items1;
		} else if (number > 1 && number <= 4) {
			return texts.items2;
		} else if (number > 4) {
			return texts.items0;
		}
	};

	const getVerb = (value, texts) => {
		const number = Number(value);
		if (number === 0) {
			return texts.verbNull;
		} else if (number === 1) {
			return texts.verbSingle;
		} else if (number > 1 && number < 5) {
			return texts.verbMultiple;
		} else if (number > 4) {
			return texts.verbSingle;
		}
	};

	return (
		<div>
			<h1>
				{pl.home.welcome} {dummyUser.user.name}
			</h1>
			<InfoWrapper>
				<Info>
					<IconWrapper>
						<FontAwesomeIcon icon={faCircleHalfStroke} color={theme.colours.highlight} />
					</IconWrapper>
					<p>
						{pl.home.openProjectsWelcome.textBefore}{" "}
						<NumberHighLight>{openProjectsCount < 10 ? openProjectsCount : "10+"}</NumberHighLight> {openProjectsText}
					</p>
				</Info>
				<Info>
					<IconWrapper>
						<FontAwesomeIcon icon={faCircleCheck} color={theme.colours.highlight} />
					</IconWrapper>
					<p>
						{pl.home.allProjectsWelcome.textBefore} <NumberHighLight>{finishedProjectsCount}</NumberHighLight>{" "}
						{finishedProjectsText}
					</p>
				</Info>
				<Info>
					<IconWrapper>
						<FontAwesomeIcon icon={faBagShopping} color={theme.colours.highlight} />
					</IconWrapper>
					<p>
						{pl.home.shoppingWelcome.textBefore} {shoppingVerb} <NumberHighLight>{shoppingCount}</NumberHighLight>{" "}
						{shoppingText}
					</p>
				</Info>
			</InfoWrapper>
		</div>
	);
};

export default Welcome;
