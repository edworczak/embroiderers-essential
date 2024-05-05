import { createSlice } from "@reduxjs/toolkit";
import dummyUser from "../../data/dummyUser";

export const userProjectsSlice = createSlice({
	name: "userProjects",
	initialState: {
		value: dummyUser.projects,
	},
	reducers: {
		addNewProject: (state, action) => {
			state.value = [action.payload, ...state.value];
		},
	},
});

export const { addNewProject } = userProjectsSlice.actions;
export default userProjectsSlice.reducer;
