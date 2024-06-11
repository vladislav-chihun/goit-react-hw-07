import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

export const initialState = {
    contacts: {
        items: [],
        loading: false,
        error: null
    },
    filters: {
		name: ""
	}
}
;

const sliceContact = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.error = false;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.error = false;
            state.loading = false;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContact.fulfilled, (state,action) => {
            state.items.push(action.payload)
            console.log(action.payload)
            state.loading = false;
        }).addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(addContact.rejected, (state) => {
            state.error = true;
            state.loading = false;
        }).addCase(deleteContact.fulfilled, (state, acton) => {
            state.error = false;
            state.loading = false;
        })
    },
});


export default sliceContact.reducer;
