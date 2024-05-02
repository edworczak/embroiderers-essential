import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { theme } from "../../../shared-styles/theme.styled";
import { IconButtonWrapper } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, colour, text, border, onClick, width, margin, iconOnly } = props;

	if (typeof onClick === "function") {
		return (
			<IconButtonWrapper $width={width} $margin={margin} $border={border} $text={!!text} $iconOnly={iconOnly}>
				<button onClick={onClick}>
					<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
					{text && <span>{text}</span>}
				</button>
			</IconButtonWrapper>
		);
	} else {
		return (
			<IconButtonWrapper $width={width} $margin={margin} $border={border} $text={!!text} $iconOnly={iconOnly}>
				<Link to={onClick}>
					<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
					{text && <span>{text}</span>}
				</Link>
			</IconButtonWrapper>
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
	iconOnly: PropTypes.bool,
};

export default IconButton;
