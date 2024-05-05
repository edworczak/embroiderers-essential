import { configureStore } from "@reduxjs/toolkit";

import finishedProjectsCountReducer from "../components/projects-list/slice/finished-projects-count";
import openProjectsCountReducer from "../components/projects-list/slice/open-projects-count";
import shoppingListItemsCountReducer from "../components/shopping-list/slice/shopping-list-items-count";
import userProjectsReducer from "./slice/user-projects";
import userThreadsReducer from "./slice/user-threads";
import threadColoursReducer from "./slice/thread-colours";
import userShoppingListReducer from "./slice/user-shopping-list";

export default configureStore({
	reducer: {
		shoppingListItemsCount: shoppingListItemsCountReducer,
		openProjectsCount: openProjectsCountReducer,
		finishedProjectsCount: finishedProjectsCountReducer,
		userProjects: userProjectsReducer,
		userThreads: userThreadsReducer,
		threadColours: threadColoursReducer,
		userShoppingList: userShoppingListReducer,
	},
});
