import { useRef, useState } from 'react';
import LoadingIndicator from 'react-loading-indicator';
import Notiflix from 'notiflix';

import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contacts';
import { getFilteredContacts } from 'shared/getFilteredContacts';

import ContactList from './ContactList';
import Filter from './Filter';
import NewUserForm from './NewUserForm';

import styles from './Phonebook.module.css';

const Phonebook = () => {
  const [filter, setFilter] = useState('');
  const isPrevSuccess = useRef(false);

  const { data, error, isLoading } = useGetContactsQuery();
  const [createContact, { isLoading: isFetching, isSuccess }] =
    useCreateContactMutation();

  const addContact = userData => {
    const duplicate = data.find(item => item.name === userData.name);

    if (duplicate) {
      Notiflix.Notify.info(`${userData.name} already exists in your contacts!`);
      return;
    }

    createContact(userData);
  };

  const filteredContacts = getFilteredContacts(filter, data);

  const showContacts = data && !isLoading & !error;
  const showToast = () => {
    isPrevSuccess.current = true;
    return Notiflix.Notify.success('Contact added to your phonebook!');
  };

  return (
    <div className={styles.container}>
      <NewUserForm onSubmit={addContact} isLoading={isFetching} />
      <Filter handleChange={setFilter} />
      {isSuccess && !isPrevSuccess.current && showToast()}
      {isLoading && <LoadingIndicator segmentLength={5} segmentWidth={5} />}
      {showContacts ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <p>Your book is empty, add someone</p>
      )}
    </div>
  );
};

export default Phonebook;
