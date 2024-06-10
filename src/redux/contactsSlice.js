import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

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
            state.error = false
            state.loading = true
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false
            state.contacts.items = action.payload
            state.error = false
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    },
});

export const { addContact, deleteContact } = sliceContact.actions;
export default sliceContact.reducer;
