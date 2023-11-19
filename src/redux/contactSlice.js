import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = { items: initialContacts, filter: '' };

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    increment(state, action) {
      state.items = [action.payload, ...state.items];
    },

    decrement(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const ReducerContact = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { increment, decrement, setFilter } = contactSlice.actions;

///Selectors///

export const getContact = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
