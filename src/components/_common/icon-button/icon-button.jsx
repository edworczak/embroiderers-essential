import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { theme } from "../../../shared-styles/theme.styled";
import { IconButtonWrapper } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, label, onClick, iconOnly } = props;

	// eslint-disable-next-line react/prop-types
	const CTA = ({ children }) => {
		if (typeof onClick === "function") {
			return <button onClick={onClick}>{children}</button>;
		} else {
			return <Link to={onClick}>{children}</Link>;
		}
	};

	return (
		<IconButtonWrapper $iconOnly={iconOnly}>
			<CTA onClick={onClick}>
				<FontAwesomeIcon icon={icon} color={theme.colours.CTA} />
				{label && <span>{label}</span>}
			</CTA>
		</IconButtonWrapper>
	);
};

IconButton.propTypes = {
	icon: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
	iconOnly: PropTypes.bool,
};

export default IconButton;
