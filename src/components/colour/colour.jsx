import { faBoxesStacked, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import brandNames from "../../data/brandNames";
import CardCTA from "../card-cta/card-cta";
import { ColourInfo, ColourName, ColourSubstitute, ColourSwatch } from "./colour.styled";

const Colour = ({ colour, noCTAs, smallColourCard }) => {
	const addToCollectionCTA = {
		keyName: "addToCollection",
		icon: faBoxesStacked,
		text: "do zapasów",
		iconOnly: true,
	};

	const addToCartCTA = {
		keyName: "addToCart",
		icon: faCartShopping,
		text: "dodaj do listy zakupów",
		iconOnly: true,
	};

	const getCTAs = () => {
		if (noCTAs) return;

		const CTAs = [];
		if (!smallColourCard) CTAs.push(addToCollectionCTA);
		CTAs.push(addToCartCTA);
		return CTAs;
	};

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
		<CardCTA smallColourCard={smallColourCard} contentInRow={true} CTAs={getCTAs()}>
			<ColourSwatch style={{ background: colour.rgb }} />
			<ColourInfo>
				<ColourName>
					{colour.brand}
					<h3>{colour.name}</h3>
				</ColourName>
				{!smallColourCard && (
					<div>
						{brandNames.map((brand) => {
							return substituteLine(brand, colour[brand.code]);
						})}
					</div>
				)}
			</ColourInfo>
		</CardCTA>
	);
};

Colour.propTypes = {
	colour: PropTypes.object.isRequired,
	noCTAs: PropTypes.bool,
	smallColourCard: PropTypes.bool,
};

export default Colour;
