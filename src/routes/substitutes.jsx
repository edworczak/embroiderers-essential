import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Heading from "../components/_common/layout/heading";
import { RowStyled } from "../components/_common/layout/layout.styled";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import colours from "../data/colours";
import pl from "../data/pl";

const SubstitutesPage = () => {
	return (
		<>
			<Heading title={pl.substitutes.title} CTA={{ label: "szukaj", icon: faSearch, onClick: "/search" }} />
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
