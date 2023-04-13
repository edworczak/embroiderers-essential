import { createSlice } from "@reduxjs/toolkit";

export const shoppingListItemsCountSlice = createSlice({
	name: "shoppingListItemsCount",
	initialState: {
		value: 0,
	},
	reducers: {
		updateShoppingListItemsCount: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateShoppingListItemsCount } =
	shoppingListItemsCountSlice.actions;
export default shoppingListItemsCountSlice.reducer;
export const SelectorShoppingListItemsCount = (state) =>
	state.shoppingListItemsCount.value;
console.log(SelectorShoppingListItemsCount);
