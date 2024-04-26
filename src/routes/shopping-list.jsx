import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { HeadingCTAWrapper, HeadingRow, Row } from "../app/app.styled";
import Colour from "../components/colour/colour";
import IconButton from "../components/icon-button/icon-button";
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
					<List numberOfColumns={4}>
						{dummyUser.shoppingList.threads.map((colour) => {
							return <Colour colourID={colour.id} key={colour.id} editCTA={true} deleteCTA={true} collectionCTA={true} smallButtons={true}/>;
						})}
					</List>
				)}
			</Row>
		</div>
	);
};

export default ShoppingListPage;
