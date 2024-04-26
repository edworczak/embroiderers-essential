import { HeadingPrimary, HeadingRow } from "../app/app.styled";
import pl from "../data/pl";

const SearchPage = () => {
	return (
		<>
			<HeadingRow>
				<HeadingPrimary>{pl.search.title}</HeadingPrimary>
			</HeadingRow>
		</>
	);
};

export default SearchPage;
