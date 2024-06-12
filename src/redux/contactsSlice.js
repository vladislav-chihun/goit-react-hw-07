import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilters, selectIsError, selectIsLoading, selectItems } from "./selectors";


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
        }).addCase(deleteContact.fulfilled, (state) => {
            state.error = false;
            state.loading = false;
            
        })
    },
});

export const selectFilteredContacts = createSelector([
    selectItems,selectFilters
], (contacts, filter) => { 
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
})





export default sliceContact.reducer;
