import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import { IconButtonStyled } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, colour, text, border, onClick } = props;

	return (
		<IconButtonStyled $border={border} $text={!!text} onClick={onClick}>
			<span>{text}</span>
			<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
		</IconButtonStyled>
	);
};

IconButton.propTypes = {
	icon: PropTypes.object.isRequired,
	colour: PropTypes.string,
	text: PropTypes.string,
	border: PropTypes.bool,
	onClick: PropTypes.func,
};

export default IconButton;
