import {
	faArrowLeft,
	faBars,
	faGears,
	faHouse,
	faQuestion,
	faSearch,
	faUser,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import pl from "../../data/pl";
import IconButton from "../icon-button/icon-button";
import { NavigationWrapper, ScreenOverlay } from "./navigation.styled";

const Navigation = () => {
	const homepage = useLocation().pathname === `/`;

	const [expanded, setExpanded] = useState(false);
	const [opening, setOpening] = useState(false);
	const [closing, setClosing] = useState(false);

	const handleMenuClick = () => {
		// for animation
		if (expanded) {
			setClosing(true);
			setTimeout(() => {
				setClosing(false);
			}, 200);
		} else {
			setOpening(true);
			setTimeout(() => {
				setOpening(false);
			}, 200);
		}
		setExpanded(!expanded);
	};

	return (
		<>
			<ScreenOverlay $expanded={expanded} $opening={opening} $closing={closing} />
			<NavigationWrapper $expanded={expanded} data-current={location.pathname}>
				<div>
					{!homepage && <IconButton icon={faArrowLeft} text={pl.navigation.back} onClick={`/`} />}
					{!homepage && <IconButton icon={faHouse} text={pl.navigation.home} onClick={`/`} />}
					<IconButton icon={faUser} text={pl.navigation.profile} onClick={`profile`} />
					<IconButton icon={faGears} text={pl.navigation.settings} onClick={`settings`} />
					<IconButton icon={faQuestion} text={pl.navigation.help} onClick={`help`} />
				</div>
				<div>
					<IconButton icon={faSearch} text={pl.navigation.search} onClick={`search`} />
					<IconButton
						onClick={handleMenuClick}
						icon={expanded ? faXmark : faBars}
						text={pl.navigation.close}
						width={expanded ? "100%" : "50px"}
					/>
				</div>
			</NavigationWrapper>
		</>
	);
};

Navigation.propTypes = {
	homepage: PropTypes.bool,
};

export default Navigation;
