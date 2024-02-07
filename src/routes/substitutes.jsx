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
				<List $wrap={true}>
					{colours.map((colour) => {
						return <Colour colour={colour} key={colour.id} />;
					})}
				</List>
			</Row>
		</div>
	);
};

export default SubstitutesPage;
