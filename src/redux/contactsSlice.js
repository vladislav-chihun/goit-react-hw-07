import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    contacts: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    },
    filters: {
		name: ""
	}
};

const sliceContact = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
        },
    },
});

export const { addContact, deleteContact } = sliceContact.actions;
export default sliceContact.reducer;
