import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./app/app";
import store from "./app/store";
import { GlobalStyles } from "./index.styled";

const EmbroidererEssential = () => {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	);
};

render(<EmbroidererEssential />, document.getElementById("root"));
