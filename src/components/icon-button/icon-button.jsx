import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import { IconButtonStyled, IconLinkStyled } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, colour, text, border, onClick, width, margin } = props;

	if (typeof onClick === "function") {
		return (
			<IconButtonStyled $border={border} $text={!!text} $width={width} $margin={margin} onClick={onClick}>
				<span>{text}</span>
				<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
			</IconButtonStyled>
		);
	} else {
		return (
			<IconLinkStyled to={onClick} $border={border} $text={!!text} $width={width} $margin={margin}>
				<span>{text}</span>
				<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
			</IconLinkStyled>
		);
	}
};

IconButton.propTypes = {
	icon: PropTypes.object.isRequired,
	colour: PropTypes.string,
	text: PropTypes.string,
	border: PropTypes.bool,
	onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	width: PropTypes.string,
	margin: PropTypes.string,
};

export default IconButton;
