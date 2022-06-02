import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './contactsTypes';
import { nanoid } from 'nanoid';

const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: { ...payload, id: nanoid() },
  };
};

const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};

const actionCreators = {
  addContact,
  deleteContact,
  setFilter,
};

export default actionCreators;
