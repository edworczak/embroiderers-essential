import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import { HeadingPrimaryStyled, HeadingRowStyled, HeadingSecondaryStyled } from "./layout.styled";

const Heading = ({ title, secondary, CTA }) => {
	return (
		<HeadingRowStyled $secondary={secondary}>
			{secondary ? (
				<HeadingSecondaryStyled>{title}</HeadingSecondaryStyled>
			) : (
				<HeadingPrimaryStyled>{title}</HeadingPrimaryStyled>
			)}
			{CTA && <IconButton icon={CTA.icon} label={CTA.label} onClick={CTA.onClick} />}
		</HeadingRowStyled>
	);
};

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
	CTA: PropTypes.shape({
		label: PropTypes.string,
		icon: PropTypes.object,
		onClick: PropTypes.string,
	}),
};

export default Heading;
