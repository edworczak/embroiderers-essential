import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import { IconButtonStyled } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, colour, text, border } = props;

	return (
		<IconButtonStyled $border={border} $text={!!text}>
			{text}
			<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
		</IconButtonStyled>
	);
};

IconButton.propTypes = {
	icon: PropTypes.object.isRequired,
	colour: PropTypes.string,
	text: PropTypes.string,
	border: PropTypes.bool,
};

export default IconButton;
