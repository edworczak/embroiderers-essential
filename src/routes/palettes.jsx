import { HeadingPrimary, HeadingRow, Row } from "../app/app.styled";
import pl from "../data/pl";

const PalettesPage = () => {
	return (
		<>
			<HeadingRow>
				<HeadingPrimary>{pl.palettes.title}</HeadingPrimary>
			</HeadingRow>
			<Row>
				<p>{pl.palettes.null}</p>
			</Row>
		</>
	);
};

export default PalettesPage;
