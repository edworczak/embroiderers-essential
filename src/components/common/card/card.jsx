import PropTypes from "prop-types";

import { CardStyled } from "./card.styled";

const Card = ({ children }) => {
	return <CardStyled>{children}</CardStyled>;
};

Card.propTypes = {
	children: PropTypes.node,
};

export default Card;
