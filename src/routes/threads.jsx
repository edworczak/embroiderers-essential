import { faPlus } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../components/_common/icon-button/icon-button";
import { HeadingPrimaryStyled, HeadingRowStyled, RowStyled } from "../components/_common/layout/layout.styled";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import dummyUser from "../data/dummyUser";
import pl from "../data/pl";

const ThreadsPage = () => {
	return (
		<>
			<HeadingRowStyled $useFlex={true} $justify={"space-between"} $align={"center"}>
				<HeadingPrimaryStyled>{pl.threads.title}</HeadingPrimaryStyled>
				<IconButton icon={faPlus} text={"dodaj do zapasów"} />
			</HeadingRowStyled>
			<RowStyled>
				{!dummyUser.threads && pl.threads.null}
				{dummyUser.threads && (
					<List maxColumns={2}>
						{dummyUser.threads.map((colour) => {
							return (
								<Colour colourID={colour.id} key={colour.id} noSubstitutes={true} deleteCTA={true} cartCTA={true} />
							);
						})}
					</List>
				)}
			</RowStyled>
		</>
	);
};

export default ThreadsPage;
