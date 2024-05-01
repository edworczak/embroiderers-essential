import PropTypes from "prop-types";

import { CardStyled } from "./card.styled";

const Card = ({ children, alignCTAsToRight }) => {
	return <CardStyled $alignCTAsToRight={alignCTAsToRight}>{children}</CardStyled>;
};

Card.propTypes = {
	children: PropTypes.node,
	alignCTAsToRight: PropTypes.bool,
};

export default Card;
