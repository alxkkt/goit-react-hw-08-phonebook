import { useDeleteContactMutation } from 'redux/contacts/contacts';
import Notiflix from 'notiflix';

import styles from './Contact.module.css';

const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
  const onDelete = id => {
    deleteContact(id);
  };
  return (
    <li key={id} className={styles.contactsListItem}>
      {isSuccess &&
        Notiflix.Notify.success(`${name} removed from your Phonebook`)}
      <p>
        {name}: <b>{phone}</b>
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

export default Contact;
