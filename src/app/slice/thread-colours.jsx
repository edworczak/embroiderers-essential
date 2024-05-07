import { createSlice } from "@reduxjs/toolkit";

import colours from "../../data/colours";

export const threadColoursSlice = createSlice({
    name: "threadColours",
    initialState: {
        value: colours,
    },
});

export default threadColoursSlice.reducer;
