import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import IconButton from "../icon-button/icon-button";
import { CardCTAWrapper, CardItemCTAsWrapper } from "./card-cta.styled";

const CardCTA = ({ children, url, CTAs, verticalCardLayout }) => {
	return (
		<CardCTAWrapper $verticalCard={verticalCardLayout}>
			<Link to={url}>{children}</Link>
			{CTAs.length > 0 && (
				<CardItemCTAsWrapper>
					{CTAs.map((CTA) => {
						return <IconButton key={CTA.keyName} icon={CTA.icon} text={CTA.text} iconOnly={CTA.iconOnly} />;
					})}
				</CardItemCTAsWrapper>
			)}
		</CardCTAWrapper>
	);
};

CardCTA.propTypes = {
	children: PropTypes.node,
	url: PropTypes.string,
	CTAs: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	verticalCardLayout: PropTypes.bool,
};

export default CardCTA;
