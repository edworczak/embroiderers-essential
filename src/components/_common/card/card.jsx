import PropTypes from "prop-types";

import { CardStyled } from "./card.styled";

const Card = ({ children, exactMatch }) => {
	return <CardStyled $exactMatch={exactMatch}>{children}</CardStyled>;
};

Card.propTypes = {
	children: PropTypes.node,
	exactMatch: PropTypes.bool,
};

export default Card;
