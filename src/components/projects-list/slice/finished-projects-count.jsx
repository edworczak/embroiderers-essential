import { createSlice } from "@reduxjs/toolkit";

export const finishedProjectsCountSlice = createSlice({
	name: "finishedProjectsCount",
	initialState: {
		value: 0,
	},
	reducers: {
		updateFinishedProjectsCount: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateFinishedProjectsCount } =
	finishedProjectsCountSlice.actions;
export default finishedProjectsCountSlice.reducer;
