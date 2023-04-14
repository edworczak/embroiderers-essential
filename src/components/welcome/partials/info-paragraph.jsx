import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../../shared-styles/theme.styled";
import { IconWrapper, Info, NumberHighLight } from "../welcome.styled";

const InfoParagraph = (props) => {
	const { icon, textBefore, verbs, number, textsAfter } = props;

	const getTextDeclination = () => {
		if (textsAfter) {
			switch (number) {
				case 1:
					return textsAfter.items1;
				case 2:
				case 3:
				case 4:
					return textsAfter.items2;
				default:
					return textsAfter.items0;
			}
		}
	};

	const textAfter = getTextDeclination();

	const getVerbDeclination = () => {
		if (verbs) {
			switch (number) {
				case 0:
					return verbs.verbNull;
				case 2:
				case 3:
				case 4:
					return verbs.verbMultiple;
				default:
					return verbs.verbSingle;
			}
		}
	};

	const verb = getVerbDeclination();

	return (
		<>
			<Info>
				<IconWrapper>
					<FontAwesomeIcon icon={icon} color={theme.colours.highlight} />
				</IconWrapper>
				<p>
					{textBefore} {verb} <NumberHighLight>{number}</NumberHighLight> {textAfter}
				</p>
			</Info>
		</>
	);
};

InfoParagraph.propTypes = {
	icon: PropTypes.object.isRequired,
	textBefore: PropTypes.string,
	verbs: PropTypes.object,
	number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	textsAfter: PropTypes.object,
};

export default InfoParagraph;
