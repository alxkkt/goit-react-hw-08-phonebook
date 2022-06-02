import { useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import actionCreators from 'redux/contacts/contactsActionCreators';
import { getContacts } from 'redux/contacts/contactsSelectors';

import Phonebook from 'components/Phonebook';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const App = () => {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(getContacts, shallowEqual);
  console.log(contacts);
  const dispatch = useDispatch();

  const addContact = contact => {
    const action = actionCreators.addContact(contact);

    if (contacts.find(({ name }) => name === contact.name)) {
      Notiflix.Report.warning('Oops', 'You already have this contact');
      return;
    }

    dispatch(action);
  };

  const removeContact = id => {
    const action = actionCreators.deleteContact(id);

    dispatch(action);
  };

  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const searchedName = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchedName),
    );

    return filteredContacts;
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook onSubmit={addContact} />
      <h2
        style={{
          marginBottom: '10px',
        }}
      >
        Contacts
      </h2>
      <Filter handleChange={changeFilter} filter={filter} />
      <ContactList contacts={filteredContacts} onDelete={removeContact} />
    </div>
  );
};

export default App;
