import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { HeadingPrimary, HeadingRow, Row } from "../app/app.styled";
import Colour from "../components/colour/colour";
import IconButton from "../components/icon-button/icon-button";
import List from "../components/list/list";
import dummyUser from "../data/dummyUser";
import pl from "../data/pl";

const ThreadsPage = () => {
	return (
		<>
			<HeadingRow $useFlex={true} $justify={"space-between"} $align={"center"}>
				<HeadingPrimary>{pl.threads.title}</HeadingPrimary>
				<IconButton icon={faPlus} text={"dodaj do zapasów"} />
			</HeadingRow>
			<Row>
				{!dummyUser.threads && pl.threads.null}
				{dummyUser.threads && (
					<List numberOfColumns={3}>
						{dummyUser.threads.map((colour) => {
							return (
								<Colour
									colourID={colour.id}
									key={colour.id}
									noSubstitutes={true}
									editCTA={true}
									deleteCTA={true}
									cartCTA={true}
									smallButtons={true}
								/>
							);
						})}
				</List>
				)}
			</Row>
		</>
	);
};

export default ThreadsPage;
