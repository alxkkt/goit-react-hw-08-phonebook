import { userContacts } from './initialContacts';
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './contactsTypes';

const contactsReducer = (
  state = {
    contacts: {
      items: userContacts,
      filter: '',
    },
  },
  { type, payload },
) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts.items, payload];
      return newContacts;
    case DELETE_CONTACT:
      return state.contacts.items.filter(item => item.id !== payload);
    case SET_FILTER:
      return payload;
    default:
      return state.contacts.items;
  }
};

export default contactsReducer;
