import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'shared/getFilteredContacts';
import { actions } from 'redux/contacts/contacts-slice';

import Phonebook from 'components/Phonebook';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const App = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);

  const dispatch = useDispatch();

  const addNewContact = contact => {
    const action = actions.add(contact);
    const isDuplicated = contacts.find(({ name }) => name === contact.name);

    if (isDuplicated) {
      Notiflix.Report.warning('Oops', 'You already have this contact');
      return;
    }

    dispatch(action);
  };

  const changeFilter = ({ target }) => {
    const action = actions.setFilter(target.value);

    dispatch(action);
  };

  const removeContact = id => {
    const action = actions.delete(id);

    dispatch(action);
  };

  const filteredContacts = getFilteredContacts(filter, contacts);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook onSubmit={addNewContact} />
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
