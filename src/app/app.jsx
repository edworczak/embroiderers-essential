import { Route, Routes } from "react-router-dom";

import Error from "../routes/error";
import Home from "../routes/home";
import Layout from "../routes/layout";
import ProjectsPage from "../routes/projects";
import PalettesPage from "../routes/palettes";
import ThreadsPage from "../routes/threads";
import ShoppingListPage from "../routes/shopping-list";
import SubstitutesPage from "../routes/substitutes";
import HelpPage from "../routes/help";
import SearchPage from "../routes/search";
import SettingsPage from "../routes/settings";
import ProfilePage from "../routes/profile";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<ProjectsPage />} />
				<Route path="palettes" element={<PalettesPage />} />
				<Route path="threads" element={<ThreadsPage />} />
				<Route path="shoppinglist" element={<ShoppingListPage />} />
				<Route path="substitutes" element={<SubstitutesPage />} />
				<Route path="help" element={<HelpPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="search" element={<SearchPage />} />
				<Route path="settings" element={<SettingsPage />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default App;
