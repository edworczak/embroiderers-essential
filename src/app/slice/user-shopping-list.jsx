import { createSlice } from "@reduxjs/toolkit";

import dummyUser from "../../data/dummyUser";

export const userShoppingListSlice = createSlice({
    name: "userShoppingList",
    initialState: {
        value: dummyUser.shoppingList,
    },
    reducers: {
        addThreadToCart: (state, action) => {
            state.value.threads = [action.payload, ...state.value.threads];
        },
        deleteThreadFromCart: (state, action) => {
            const index = state.value.threads.findIndex(function (thread) {
                return thread.id === action.payload;
            });

            state.value.threads.splice(index, 1);
        },
    },
});

export const { addThreadToCart, deleteThreadFromCart } = userShoppingListSlice.actions;
export default userShoppingListSlice.reducer;
