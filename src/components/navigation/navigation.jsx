import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import navigationLinks from "../../data/navigationLinks";
import { theme } from "../../shared-styles/theme.styled";
import { NavigationBackHomeWrapper, NavigationLink, NavigationWrapper } from "./navigation.styled";

const Navigation = () => {
	const homepage = useLocation().pathname === `/home`;
	const currentLocation = useLocation().pathname;

	const createLinks = (links) => {
		return links.map((link) => {
			return (
				<NavigationLink to={link.link} key={link.id} $active={link.link === currentLocation}>
					{link.icon && <FontAwesomeIcon icon={link.icon} color={theme.colours.white} />}
					<span>{link.label}</span>
				</NavigationLink>
			);
		});
	};

	return (
		<NavigationWrapper data-current={location.pathname}>
			{createLinks(navigationLinks.tools)}
			{!homepage && <NavigationBackHomeWrapper>{createLinks(navigationLinks.historyNav)}</NavigationBackHomeWrapper>}
		</NavigationWrapper>
	);
};

Navigation.propTypes = {
	homepage: PropTypes.bool,
};

export default Navigation;
