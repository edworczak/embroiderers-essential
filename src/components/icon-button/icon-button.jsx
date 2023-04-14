import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import { IconButtonStyled } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, colour, text, border, onClick, width, margin } = props;

	return (
		<IconButtonStyled $border={border} $text={!!text} $width={width} $margin={margin} onClick={onClick}>
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
	width: PropTypes.string,
	margin: PropTypes.string,
};

export default IconButton;
