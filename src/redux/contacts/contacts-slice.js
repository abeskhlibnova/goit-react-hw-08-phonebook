import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPending = store => {
  store.isLoading = true;
};

const isRejected = (store, action) => {
  store.isLoading = false;
  store.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: isPending,
    [fetchContacts.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;
      store.items = action.payload;
    },
    [fetchContacts.rejected]: isRejected,
    [addContact.pending]: isPending,
    [addContact.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;
      store.items.push(action.payload);
    },
    [addContact.rejected]: isRejected,
    [deleteContact.pending]: isPending,
    [deleteContact.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;

      const index = store.items.findIndex(
        contact => contact.id === action.payload.id
      );
      store.items.splice(index, 1);
    },
    [deleteContact.rejected]: isRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   extraReducers: {
//     [fetchContacts.pending]: isPending,
//     [fetchContacts.fulfilled](store, action) {
//       store.isLoading = false;
//       store.error = null;
//       store.items = action.payload;
//     },
//     [fetchContacts.rejected]: isRejected,
//     [addContact.pending]: isPending,
//     [addContact.fulfilled](store, action) {
//       store.isLoading = false;
//       store.error = null;
//       store.items.push(action.payload);
//     },
//     [addContact.rejected]: isRejected,
//     [deleteContact.pending]: isPending,
//     [deleteContact.fulfilled](store, action) {
//       store.isLoading = false;
//       store.error = null;

//       const index = store.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       store.items.splice(index, 1);
//     },
//     [deleteContact.rejected]: isRejected,
//   },
// });

// extraReducers: builder =>
//   builder
//     .addCase(fetchContacts.pending, isPending)
//     .addCase(fetchContacts.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     })
//     .addCase(fetchContacts.rejected, isRejected)
//     .addCase(addContact, isPending)
//     .addCase(addContact.fulfilled, (store, action) => {
//       store.isLoading = false;
//       store.error = null;
//       store.push(action.payload);
//     })
//     .addCase(addContact.rejected.isRejected)
//     .addCase(deleteContact.pending, isPending)
//     .addCase(deleteContact.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;

//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     })
//     .addCase(deleteContact.rejected, isRejected),
