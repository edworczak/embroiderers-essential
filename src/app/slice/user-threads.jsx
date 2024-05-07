import { createSlice } from "@reduxjs/toolkit";

import dummyUser from "../../data/dummyUser";

export const userThreadsSlice = createSlice({
    name: "userThreads",
    initialState: {
        value: dummyUser.threads,
    },
    reducers: {
        addNewThread: (state, action) => {
            state.value = [action.payload, ...state.value];
        },
        deleteThread: (state, action) => {
            const index = state.value.findIndex(function (thread) {
                return thread.id === action.payload;
            });

            state.value.splice(index, 1);
        },
    },
});

export const { addNewThread, deleteThread } = userThreadsSlice.actions;
export default userThreadsSlice.reducer;
