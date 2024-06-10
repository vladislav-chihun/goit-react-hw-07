import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

const sliceFilter = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        updateFilter(state, action) {
            state.name = action.payload;
        }
    }
});

export const { updateFilter } = sliceFilter.actions;
export default sliceFilter.reducer;
