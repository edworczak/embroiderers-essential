import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import brandNames from "../../data/brandNames";
import CardCTA from "../card-cta/card-cta";
import { ColourInfo, ColourName, ColourSubstitute, ColourSwatch } from "./colour.styled";

const Colour = ({ colour }) => {
	const substituteLine = (brand, substitute) => {
		return (
			substitute && (
				<ColourSubstitute>
					<span>{brand}:</span>
					<span>{substitute[0]}</span>
				</ColourSubstitute>
			)
		);
	};

	return (
		<CardCTA
			contentInRow={true}
			CTAs={[
				{
					keyName: "addToCart",
					icon: faCartShopping,
					text: "do listy zakupów",
				},
			]}
		>
			<ColourSwatch $background={colour.rgb} />
			<ColourInfo>
				<ColourName>
					{colour.brand}
					<h3>{colour.name}</h3>
				</ColourName>
				{substituteLine(brandNames.full.dmc, colour.dmc)}
				{substituteLine(brandNames.full.anchor, colour.anchor)}
				{substituteLine(brandNames.full.ariadna, colour.ariadna)}
			</ColourInfo>
		</CardCTA>
	);
};

Colour.propTypes = {
	colour: PropTypes.object,
};

export default Colour;
