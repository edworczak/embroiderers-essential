import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import { CardAnchorContent, CardCTAWrapper, CardItemCTAsWrapper } from "./card-cta.styled";

const CardCTA = ({ children, CTAs }) => {
	return (
		<CardCTAWrapper>
			<CardAnchorContent>{children}</CardAnchorContent>
			{CTAs && (
				<CardItemCTAsWrapper>
					{CTAs.map((CTA) => {
						return <IconButton key={CTA.keyName} icon={CTA.icon} text={CTA.text} />;
					})}
				</CardItemCTAsWrapper>
			)}
		</CardCTAWrapper>
	);
};

CardCTA.propTypes = {
	children: PropTypes.node,
	CTAs: PropTypes.array,
};

export default CardCTA;
