import { HeadingPrimaryStyled, HeadingRowStyled, RowStyled } from "../components/_common/layout/layout.styled";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import colours from "../data/colours";
import pl from "../data/pl";

const SubstitutesPage = () => {
	return (
		<>
			<HeadingRowStyled>
				<HeadingPrimaryStyled>{pl.substitutes.title}</HeadingPrimaryStyled>
			</HeadingRowStyled>
			<RowStyled>
				<List maxColumns={2}>
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
			</RowStyled>
		</>
	);
};

export default SubstitutesPage;
