import { useState } from 'react';
import LoadingIndicator from 'react-loading-indicator';

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

  const { data, error, isLoading } = useGetContactsQuery();
  const [createContact, { isLoading: isFetching, isSuccess }] =
    useCreateContactMutation();

  console.log('Inside Phpnebook: ', isSuccess);
  const filteredContacts = getFilteredContacts(filter, data);

  const showContacts = data && !isLoading & !error;

  return (
    <div className={styles.container}>
      <NewUserForm
        data={data}
        onSubmit={createContact}
        isLoading={isFetching}
        isSuccess={isSuccess}
      />
      <Filter handleChange={setFilter} />
      {isLoading && <LoadingIndicator />}
      {showContacts && <ContactList contacts={filteredContacts} />}
    </div>
  );
};

export default Phonebook;
