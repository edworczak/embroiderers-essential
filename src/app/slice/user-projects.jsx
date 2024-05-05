import { createSlice } from "@reduxjs/toolkit";
import dummyUser from "../../data/dummyUser";

export const userProjectsSlice = createSlice({
	name: "userProjects",
	initialState: {
		value: dummyUser.projects,
	},
	reducers: {
		addNewProject: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});

export const { addNewProject } = userProjectsSlice.actions;
export default userProjectsSlice.reducer;
