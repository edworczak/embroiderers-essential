import { faBoxesStacked, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import brandNames from "../../data/brandNames";
import CardCTA from "../card-cta/card-cta";
import { ColourInfo, ColourName, ColourSubstitute, ColourSwatch } from "./colour.styled";

const Colour = ({ colour }) => {
	const substituteLine = (brand, substitute) => {
		return (
			substitute && (
				<ColourSubstitute key={brand.code}>
					<span>{brand.name}:</span>
					<span>{substitute[0].replace(brand.code, "")}</span>
				</ColourSubstitute>
			)
		);
	};

	return (
		<CardCTA
			contentInRow={true}
			CTAs={[
				{
					keyName: "addToCollection",
					icon: faBoxesStacked,
					text: "do zapasów",
					iconOnly: true,
				},
				{
					keyName: "addToCart",
					icon: faCartShopping,
					text: "dodaj do listy zakupów",
					iconOnly: true,
				},
			]}
		>
			<ColourSwatch $background={colour.rgb} />
			<ColourInfo>
				<ColourName>
					{colour.brand}
					<h3>{colour.name}</h3>
				</ColourName>
				{brandNames.map((brand) => {
					return substituteLine(brand, colour[brand.code]);
				})}
			</ColourInfo>
		</CardCTA>
	);
};

Colour.propTypes = {
	colour: PropTypes.object,
};

export default Colour;
