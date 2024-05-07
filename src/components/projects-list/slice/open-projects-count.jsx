import { createSlice } from "@reduxjs/toolkit";

export const openProjectsCountSlice = createSlice({
    name: "openProjectsCount",
    initialState: {
        value: 0,
    },
    reducers: {
        updateOpenProjectsCount: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateOpenProjectsCount } = openProjectsCountSlice.actions;
export default openProjectsCountSlice.reducer;
