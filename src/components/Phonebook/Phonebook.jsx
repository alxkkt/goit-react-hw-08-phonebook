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
import ShowErrorNotification from 'shared/components/ShowErrorNotification';

import styles from './Phonebook.module.css';

const Phonebook = () => {
  const [filter, setFilter] = useState('');
  const isPrevSuccess = useRef(false);

  const { data, isLoading, isError, error } = useGetContactsQuery();
  const [createContact, { isLoading: isFetching, isSuccess }] =
    useCreateContactMutation();
  const errorMsg = error?.data?.message;

  const addContact = userData => {
    const duplicate = data.find(item => item.name === userData.name);

    if (duplicate) {
      Notiflix.Notify.info(`${userData.name} already exists in your contacts!`);
      return;
    }

    createContact(userData);
  };

  const filteredContacts = getFilteredContacts(filter, data);

  const isData = Boolean(data?.length) && !isLoading & !isError;
  const showContent = () => {
    const content = isData ? (
      <ContactList contacts={filteredContacts} />
    ) : (
      <h3>Your phonebook is empty, add user to begin</h3>
    );
    return content;
  };

  const showToast = () => {
    isPrevSuccess.current = true;
    return Notiflix.Notify.success('Contact added to your phonebook!');
  };

  return (
    <div className={styles.container}>
      <NewUserForm onSubmit={addContact} isLoading={isFetching} />
      <Filter handleChange={setFilter} />
      {isLoading && <LoadingIndicator segmentLength={5} segmentWidth={5} />}
      {showContent()}
      {isSuccess && !isPrevSuccess.current && showToast()}
      {isError && <ShowErrorNotification msg={errorMsg} />}
    </div>
  );
};

export default Phonebook;
