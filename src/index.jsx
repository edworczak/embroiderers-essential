import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app/app";

const EmbroidererEssential = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
};

render(<EmbroidererEssential />, document.getElementById("root"));
