import PropTypes from "prop-types";
import * as PropType from "prop-types";

import {
	ColourBrand,
	ColourInfoWrapper,
	ColourNumber,
	TextWrapper,
} from "./colour-info.styled";

const ColourInfo = ({ brand, number, accurate }) => {
	if (!number) {
		number = "–";
	}

	let numbers = number.split(" ");

	return (
		<ColourInfoWrapper>
			<TextWrapper>
				<ColourBrand>{brand}</ColourBrand>
			</TextWrapper>
			<TextWrapper>
				{numbers.map((number, index) => {
					return (
						<ColourNumber key={`${number}-${index}`} accurate={accurate}>
							{number}
						</ColourNumber>
					);
				})}
			</TextWrapper>
		</ColourInfoWrapper>
	);
};

ColourInfo.propTypes = {
	brand: PropTypes.string,
	number: PropTypes.objectOf(
		PropTypes.oneOfType([PropType.string, PropType.array])
	),
	accurate: PropTypes.bool,
};

export default ColourInfo;
