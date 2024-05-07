import { Route, Routes } from "react-router-dom";

import Error from "../routes/error";
import HelpPage from "../routes/help";
import Home from "../routes/home";
import LoggedLayout from "../routes/layout/logged";
import Login from "../routes/login";
import NewProjectPage from "../routes/new-project";
import PalettesPage from "../routes/palettes";
import ProfilePage from "../routes/profile";
import ProjectsPage from "../routes/projects";
import ProjectPage from "../routes/projects/project";
import ProjectDialogPage from "../routes/projects/project-dialog";
import SearchPage from "../routes/search";
import SettingsPage from "../routes/settings";
import ShoppingListPage from "../routes/shopping-list";
import SubstitutesPage from "../routes/substitutes";
import ThreadsPage from "../routes/threads";

const App = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<LoggedLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="new-project" element={<NewProjectPage />} />
                <Route path="/project-dialog" element={<ProjectDialogPage />} />
                <Route path="projects/project" element={<ProjectPage />} />
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
