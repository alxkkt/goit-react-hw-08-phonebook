import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      filter: '',
    },
  },
  reducers: {
    add: {
      reducer(store, { payload }) {
        return {
          contacts: {
            items: [...store.contacts.items, payload],
            filter: '',
          },
        };
      },
      prepare(data) {
        const newContact = { ...data, id: nanoid() };
        return {
          payload: newContact,
        };
      },
    },
    delete: {
      reducer(store, { payload }) {
        return {
          contacts: {
            items: store.contacts.items.filter(item => item.id !== payload),
            filter: '',
          },
        };
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
    setFilter: {
      reducer(store, { payload }) {
        return {
          contacts: {
            items: store.contacts.items,
            filter: payload,
          },
        };
      },
      prepare(query) {
        return {
          payload: query,
        };
      },
    },
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;
