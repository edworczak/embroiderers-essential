import { HeadingPrimaryStyled, HeadingRowStyled } from "../components/_common/layout/layout.styled";
import pl from "../data/pl";

const HelpPage = () => {
	return (
		<>
			<HeadingRowStyled>
				<HeadingPrimaryStyled>{pl.help.title}</HeadingPrimaryStyled>
			</HeadingRowStyled>
		</>
	);
};

export default HelpPage;
