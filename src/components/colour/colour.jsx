import { faBoxesStacked, faCartShopping, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import brandNames from "../../data/brandNames";
import colours from "../../data/colours";
import dummyUser from "../../data/dummyUser";
import Card from "../_common/card/card";
import { CardCTAsWrapperStyled } from "../_common/card/card.styled";
import CardContent from "../_common/card/cardContent";
import IconButton from "../_common/icon-button/icon-button";
import TableBody from "../_common/table/table-body";
import TableRow from "../_common/table/table-row";
import { ColourName } from "./colour.styled";

const Colour = ({ colourID, description, collectionCTA, cartCTA, editCTA, deleteCTA, showSubstitutes = false }) => {
	const colour = colours.filter((colour) => {
		return colour.id === colourID;
	})[0];

	const isInStock = dummyUser.threads.filter((colour) => {
		return colour.id === colourID;
	})[0];

	const substituteLine = (brand, substitute) => {
		return substitute && <TableRow label={brand.name} text={substitute[0].replace(brand.code, "")} key={brand.code} />;
	};

	return (
		<Card>
			<CardContent colour={colour.rgb} checkIcon={!!isInStock}>
				<ColourName>
					<span>{colour.brand}</span> {colour.name}
				</ColourName>
				{description && <p>{description}</p>}
				{showSubstitutes && (
					<TableBody colourRows={true}>
						{brandNames.map((brand) => {
							return substituteLine(brand, colour[brand.code]);
						})}
					</TableBody>
				)}
			</CardContent>
			<CardCTAsWrapperStyled>
				{deleteCTA && <IconButton icon={faTrashCan} label={"usuń"} iconOnly={true} onClick={"#"} />}
				{editCTA && <IconButton icon={faPencil} label={"edytuj"} iconOnly={true} onClick={"#"} />}
				{cartCTA && <IconButton icon={faCartShopping} label={"dodaj do listy zakupów"} iconOnly={true} onClick={"#"} />}
				{collectionCTA && <IconButton icon={faBoxesStacked} label={"do zapasów"} iconOnly={true} onClick={"#"} />}
			</CardCTAsWrapperStyled>
		</Card>
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
