import PropTypes from "prop-types";

import { Info, NumberHighLight } from "../welcome.styled";

const InfoParagraph = (props) => {
	const { text, number } = props;

	return (
		<>
			<Info>
				<p>
					{text}: <NumberHighLight>{number}</NumberHighLight>
				</p>
			</Info>
		</>
	);
};

InfoParagraph.propTypes = {
	text: PropTypes.string,
	number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default InfoParagraph;
