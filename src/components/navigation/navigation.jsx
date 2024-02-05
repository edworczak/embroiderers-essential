import { faArrowLeft, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import pl from "../../data/pl";
import IconButton from "../icon-button/icon-button";
import { NavigationWrapper } from "./navigation.styled";

const Navigation = () => {
	const homepage = useLocation().pathname === `/`;

	return (
		<NavigationWrapper data-current={location.pathname}>
			<IconButton icon={faSearch} text={pl.navigation.search} onClick={`search`} />
			{!homepage && <IconButton icon={faHouse} text={pl.navigation.home} onClick={`/`} />}
			{!homepage && <IconButton icon={faArrowLeft} text={pl.navigation.back} onClick={`/`} />}
		</NavigationWrapper>
	);
};

Navigation.propTypes = {
	homepage: PropTypes.bool,
};

export default Navigation;
