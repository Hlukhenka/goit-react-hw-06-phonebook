import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    add: (state, action) => {
      state.contacts.unshift(action.payload);
    },
    remove: (state, action) => {
      console.log('Removing contact with id:', action.payload);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { add, remove } = contactsSlice.actions;
