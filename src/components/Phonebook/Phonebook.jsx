import { useRef, useState } from 'react';
import LoadingIndicator from 'react-loading-indicator';
import Notiflix from 'notiflix';

import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contacts';
import { getFilteredContacts } from 'shared/getFilteredContacts';

import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import NewUserForm from 'components/NewUserForm';

import styles from './Phonebook.module.css';

const Phonebook = () => {
  const [filter, setFilter] = useState('');
  const isPrevSuccess = useRef(false);

  const { data, error, isLoading } = useGetContactsQuery();

  const [createContact, { isLoading: isFetching, isSuccess }] =
    useCreateContactMutation();

  const addContact = ({ name, phone }) => {
    const duplicate = data.find(item => item.name === name);

    if (duplicate) {
      Notiflix.Notify.info(`${name} already exists in your contacts!`);
      return;
    }

    createContact({ name, phone });
  };

  const filteredContacts = getFilteredContacts(filter, data);

  const showContacts = data && !isLoading & !error;
  const showToast = () => {
    isPrevSuccess.current = true;
    return Notiflix.Notify.success('Contact added to your phonebook!');
  };

  return (
    <div className={styles.container}>
      <NewUserForm
        data={data}
        onSubmit={addContact}
        isLoading={isFetching}
        isSuccess={isSuccess}
      />
      <Filter handleChange={setFilter} />
      {isSuccess && !isPrevSuccess.current && showToast()}
      {isLoading && <LoadingIndicator segmentLength={5} segmentWidth={5} />}
      {showContacts && <ContactList contacts={filteredContacts} />}
    </div>
  );
};

export default Phonebook;
