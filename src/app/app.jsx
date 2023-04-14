import { Route, Routes } from "react-router-dom";

import Error from "../routes/error";
import Home from "../routes/home";
import Layout from "../routes/layout";
import ProjectsPage from "../routes/projects";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<ProjectsPage />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default App;
