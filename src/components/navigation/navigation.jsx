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

import pl from "../../data/pl";
import IconButton from "../icon-button/icon-button";
import { NavigationWrapper, ScreenOverlay } from "./navigation.styled";
import {Link} from "react-router-dom";

const Navigation = (props) => {
	const { homepage } = props;
	const [expanded, setExpanded] = useState(false);
	const [opening, setOpening] = useState(false);
	const [closing, setClosing] = useState(false);
	const handleMenuClick = () => {
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
			<NavigationWrapper $expanded={expanded}>
				<div>
					{!homepage && <IconButton icon={faArrowLeft} text={pl.navigation.back} onClick={`/`} />}
					{!homepage && <IconButton icon={faHouse} text={pl.navigation.home} onClick={`/home`}/>}
					<IconButton icon={faUser} text={pl.navigation.profile} />
					<IconButton icon={faGears} text={pl.navigation.settings} />
					<IconButton icon={faQuestion} text={pl.navigation.help} />
				</div>
				<div>
					<IconButton icon={faSearch} text={pl.navigation.search} />
					<IconButton onClick={handleMenuClick} icon={expanded ? faXmark : faBars} text={pl.navigation.close} />
				</div>
			</NavigationWrapper>
		</>
	);
};

Navigation.propTypes = {
	homepage: PropTypes.bool,
};

export default Navigation;
