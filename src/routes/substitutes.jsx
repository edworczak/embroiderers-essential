import { Row } from "../app/app.styled";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import colours from "../data/colours";
import pl from "../data/pl";

const SubstitutesPage = () => {
	return (
		<div>
			<Row>
				<h1>{pl.substitutes.title}</h1>
			</Row>
			<Row>
				<List numberOfColumns={4}>
					{colours.map((colour) => {
						return (
							<Colour
								colourID={colour.id}
								key={`substitutes-list-item-${colour.id}`}
								collectionCTA={true}
								cartCTA={true}
								smallButtons={true}
								showSubstitutes={true}
							/>
						);
					})}
				</List>
			</Row>
		</div>
	);
};

export default SubstitutesPage;
