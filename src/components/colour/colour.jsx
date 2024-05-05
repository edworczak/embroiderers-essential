import { faBoxesStacked, faCartShopping, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addThreadToCart } from "../../app/slice/user-shopping-list";
import { addNewThread, deleteThread } from "../../app/slice/user-threads";

import brandNames from "../../data/brandNames";
import Card from "../_common/card/card";
import { CardCTAsWrapperStyled } from "../_common/card/card.styled";
import CardContent from "../_common/card/cardContent";
import { getElementFromArrayByID, isElementInArray } from "../_common/common";
import IconButton from "../_common/icon-button/icon-button";
import TableBody from "../_common/table/table-body";
import TableRow from "../_common/table/table-row";
import { ColourName } from "./colour.styled";

const Colour = ({ colourID, description, collectionCTA, cartCTA, editCTA, deleteCTA, showSubstitutes = false, searchTerm = "" }) => {
	const threadColours = useSelector((state) => state.threadColours.value)
	const userThreads = useSelector((state) => state.userThreads.value)
	const userShoppingList = useSelector((state) => state.userShoppingList.value)
	const dispatch = useDispatch();
	const colour = getElementFromArrayByID(threadColours, colourID);

	const unifiedName = colour.name.toLowerCase();

	const isSearchTerm =  unifiedName.includes(searchTerm);
	const isSearchExactMatch =  unifiedName === searchTerm;

	if (!isSearchTerm) return null;

	const isInStock = isElementInArray(userThreads, colourID);
	const isInCart = isElementInArray(userShoppingList.threads, colourID);

	const addToStock = () => {
		dispatch(addNewThread({
			id: colourID,
		}));
	}

	const addToCart = () => {
		dispatch(addThreadToCart({
			id: colourID,
		}));
	}

	const substituteLine = (brand, substitute) => {
		return substitute && <TableRow label={brand.name} text={substitute[0].replace(brand.code, "")} key={brand.code} />;
	};

	return (
		<Card exactMatch={isSearchExactMatch}>
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
				{deleteCTA && <IconButton icon={faTrashCan} label={"usuń"} iconOnly={true} onClick={() => dispatch(deleteThread(colourID))} />}
				{editCTA && <IconButton icon={faPencil} label={"edytuj"} iconOnly={true} onClick={"#"} />}
				{cartCTA && !isInCart && <IconButton icon={faCartShopping} label={"dodaj do listy zakupów"} iconOnly={true} onClick={addToCart} />}
				{collectionCTA && !isInStock && <IconButton icon={faBoxesStacked} label={"do zapasów"} iconOnly={true} onClick={addToStock} />}
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
	searchTerm: PropTypes.string,
};

export default Colour;
