import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { HeadingCTAWrapper, HeadingRow, Row } from "../app/app.styled";
import Colour from "../components/colour/colour";
import Card from "../components/_common/card/card";
import { CardCTAsWrapperStyled } from "../components/_common/card/card.styled";
import CardContent from "../components/_common/card/cardContent";
import IconButton from "../components/_common/icon-button/icon-button";
import List from "../components/list/list";
import dummyUser from "../data/dummyUser";
import pl from "../data/pl";

const ShoppingListPage = () => {
	return (
		<div>
			<HeadingRow>
				<h1>{pl.shoppingList.title}</h1>
				<HeadingCTAWrapper>
					<IconButton icon={faPlus} text={"dodaj do listy"} />
				</HeadingCTAWrapper>
			</HeadingRow>
			<Row>
				{!dummyUser.shoppingList.threads && pl.shoppingList.null}
				{dummyUser.shoppingList.threads && (
					<List maxColumns={2}>
						{dummyUser.shoppingList.threads.map((colour) => {
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
				)}
			</Row>
			<Row>
				{dummyUser.shoppingList.others && (
					<List maxColumns={2}>
						{dummyUser.shoppingList.others.map((item) => {
							return (
								<Card key={item.id}>
									<CardContent>{item.name}</CardContent>
									<CardCTAsWrapperStyled>
										<IconButton icon={faTrashCan} text={"usuń"} iconOnly={true} />
									</CardCTAsWrapperStyled>
								</Card>
							);
						})}
					</List>
				)}
			</Row>
		</div>
	);
};

export default ShoppingListPage;
