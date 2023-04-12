import { useEffect, useState } from "react";

import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import { Info, InfoWrapper, NumberHighLight } from "./welcome.styled";

const Welcome = () => {
	// demo values
	const shoppingCount = 12;
	const openProjectsCount = 4;
	const finishedProjectsCount = 10;
	const [openProjectsText, setOpenProjectsText] = useState();
	const [finishedProjectsText, setFinishedProjectsText] = useState();
	const [shippingVerb, setShippingVerb] = useState();
	const [shippingText, setShippingText] = useState();

	useEffect(() => {
		prepareWelcomeTexts();
	}, []);

	const prepareWelcomeTexts = () => {
		setOpenProjectsText(
			getPolishDeclination(
				openProjectsCount,
				pl.home.openProjectsWelcome.textAfter
			)
		);
		setFinishedProjectsText(
			getPolishDeclination(
				finishedProjectsCount,
				pl.home.allProjectsWelcome.textAfter
			)
		);
		setShippingVerb(getVerb(shoppingCount, pl.home.shoppingWelcome.textAfter));
		setShippingText(
			getPolishDeclination(
				finishedProjectsCount,
				pl.home.shoppingWelcome.textAfter
			)
		);
	};

	const getPolishDeclination = (value, texts) => {
		// polish letters override <3
		if (value === 0) {
			return texts.items0;
		} else if (value === 1) {
			return texts.items1;
		} else if (value > 1 && value < 5) {
			return texts.items2;
		} else if (value > 4) {
			return texts.items0;
		}
	};

	const getVerb = (value, texts) => {
		if (value === 0) {
			return texts.verbNull;
		} else if (value === 1) {
			return texts.verbSingle;
		} else if (value > 1 && value < 5) {
			return texts.verbMultiple;
		} else if (value > 4) {
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
					{pl.home.openProjectsWelcome.textBefore}{" "}
					<NumberHighLight>
						{openProjectsCount < 10 ? openProjectsCount : "10+"}
					</NumberHighLight>{" "}
					{openProjectsText}, {pl.home.allProjectsWelcome.textBefore}{" "}
					<NumberHighLight>{finishedProjectsCount}</NumberHighLight>{" "}
					{finishedProjectsText}, {pl.home.shoppingWelcome.textBefore}{" "}
					{shippingVerb} <NumberHighLight>{shoppingCount}</NumberHighLight>{" "}
					{shippingText}
				</Info>
			</InfoWrapper>
		</div>
	);
};

export default Welcome;
