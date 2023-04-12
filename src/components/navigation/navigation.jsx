import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../icon-button/icon-button";
import { NavigationWrapper } from "./navigation.styled";

const Navigation = () => {
	return (
		<NavigationWrapper>
			<div></div>
			<div>
				<IconButton icon={faSearch} />
				<IconButton icon={faBars} />
			</div>
		</NavigationWrapper>
	);
};

export default Navigation;
