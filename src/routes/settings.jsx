import { HeadingPrimary, HeadingRow } from "../app/app.styled";
import pl from "../data/pl";

const SettingsPage = () => {
	return (
		<>
			<HeadingRow>
				<HeadingPrimary>{pl.settings.title}</HeadingPrimary>
			</HeadingRow>
		</>
	);
};

export default SettingsPage;
