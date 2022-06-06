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
            ...store.contacts,
            items: [...store.contacts.items, payload],
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
            ...store.contacts,
            items: store.contacts.items.filter(item => item.id !== payload),
          },
        };
      },
    },
    setFilter: {
      reducer(store, { payload }) {
        return {
          contacts: {
            ...store.contacts,
            filter: payload,
          },
        };
      },
    },
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;
