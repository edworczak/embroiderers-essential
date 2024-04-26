import { faBoxesStacked, faCartShopping, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { createCTAprops } from "../../app/common";

import brandNames from "../../data/brandNames";
import colours from "../../data/colours";
import CardCTA from "../card-cta/card-cta";
import TableBody from "../common/table/table-body";
import TableRow from "../common/table/table-row";
import { ColourInfo, ColourName, ColourSwatch } from "./colour.styled";

const Colour = ({ colourID, noCTAs, verticalCardLayout, description, collectionCTA, cartCTA, editCTA, deleteCTA, smallButtons = false, showSubstitutes = false }) => {
	const colour = colours.filter((colour) => {
		return colour.id === colourID;
	})[0];

	const addToCollectionCTAProps = createCTAprops("addToCollection", faBoxesStacked, "do zapasów", smallButtons);
	const addToCartCTAProps = createCTAprops("addToCart", faCartShopping, "dodaj do listy zakupów", smallButtons);
	const editCTAProps = createCTAprops("edit", faPencil, "edytuj", smallButtons);
	const deleteCTAProps = createCTAprops("delete", faTrashCan, "usuń", smallButtons);

	const getCTAs = () => {
		if (noCTAs) return;

		const CTAs = [];
		if (deleteCTA) CTAs.push(deleteCTAProps);
		if (editCTA) CTAs.push(editCTAProps);
		if (cartCTA) CTAs.push(addToCartCTAProps);
		if (collectionCTA) CTAs.push(addToCollectionCTAProps);
		return CTAs;
	};

	const substituteLine = (brand, substitute) => {
		return substitute && <TableRow label={brand.name} text={substitute[0].replace(brand.code, "")} key={brand.code} />;
	};

	return (
		<CardCTA verticalCardLayout={verticalCardLayout} contentInRow={true} CTAs={getCTAs()}>
			<ColourSwatch style={{ background: colour.rgb }} />
			<ColourInfo>
				<ColourName>
					<span>{colour.brand}</span> {colour.name}
				</ColourName>
				{description && <p>{description}</p>}
				{showSubstitutes && (
					<TableBody>
						{brandNames.map((brand) => {
							return substituteLine(brand, colour[brand.code]);
						})}
					</TableBody>
				)}
			</ColourInfo>
		</CardCTA>
	);
};

Colour.propTypes = {
	colourID: PropTypes.string.isRequired,
	noCTAs: PropTypes.bool,
	verticalCardLayout: PropTypes.bool,
	description: PropTypes.string,
	collectionCTA: PropTypes.bool,
	cartCTA: PropTypes.bool,
	editCTA: PropTypes.bool,
	deleteCTA: PropTypes.bool,
	smallButtons: PropTypes.bool,
	showSubstitutes: PropTypes.bool,
};

export default Colour;
