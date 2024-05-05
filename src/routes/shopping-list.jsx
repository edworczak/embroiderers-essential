import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Card from "../components/_common/card/card";
import { CardCTAsWrapperStyled } from "../components/_common/card/card.styled";
import CardContent from "../components/_common/card/cardContent";
import IconButton from "../components/_common/icon-button/icon-button";
import Heading from "../components/_common/layout/heading";
import { HeadingRowStyled, RowStyled } from "../components/_common/layout/layout.styled";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import pl from "../data/pl";

const ShoppingListPage = () => {
	const userShoppingList = useSelector((state) => state.userShoppingList.value);

	return (
		<div>
			<HeadingRowStyled>
				<h1>{pl.shoppingList.title}</h1>
				<IconButton icon={faPlus} label={"dodaj do listy"} onClick={"#"} />
			</HeadingRowStyled>
			<RowStyled>
				{userShoppingList.others && (
					<List maxColumns={2}>
						{userShoppingList.others.map((item) => {
							return (
								<Card key={item.id}>
									<CardContent>{item.name}</CardContent>
									<CardCTAsWrapperStyled>
										<IconButton icon={faTrashCan} label={"usuń"} iconOnly={true} onClick={"#"} />
									</CardCTAsWrapperStyled>
								</Card>
							);
						})}
					</List>
				)}
			</RowStyled>
			<RowStyled>
				<Heading title={"kolory mulin"} secondary={true} />
				{userShoppingList.threads ? (
					<List maxColumns={2}>
						{userShoppingList.threads.map((colour) => {
							return (
								<Colour
									colourID={colour.id}
									key={colour.id}
									deleteCTA={true}
									collectionCTA={true}
									smallButtons={true}
								/>
							);
						})}
					</List>
				) : (
					pl.shoppingList.null
				)}
			</RowStyled>
		</div>
	);
};

export default ShoppingListPage;
