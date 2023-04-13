import Navigation from "../components/navigation/navigation";
import Homepage from "../pages/homepage";
import { AppWrapper, Content } from "./app.styled";

const App = () => {
	return (
		<AppWrapper>
			<Navigation homepage={true} />
			<Content>
				<Homepage />
			</Content>
		</AppWrapper>
	);
};

export default App;
