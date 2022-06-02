export const getContacts = store => store.contacts;
export const deleteContact = store =>
  store.contacts.filter(contact => contact.id);
export const setFilter = store => store.contacts;
