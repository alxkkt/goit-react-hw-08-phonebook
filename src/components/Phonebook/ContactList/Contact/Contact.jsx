import { useDeleteContactMutation } from 'redux/contacts/contacts';
import Notiflix from 'notiflix';
import { memo } from 'react';

import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
  const onDelete = id => {
    deleteContact(id);
  };
  return (
    <li key={id} className={styles.contactsListItem}>
      {isSuccess && Notiflix.Notify.info(`${name} removed from your Phonebook`)}
      <p>
        {name}: <b>{number}</b>
      </p>
      <button
        disabled={isLoading}
        type="button"
        className={styles.deleteBtn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default memo(Contact);
