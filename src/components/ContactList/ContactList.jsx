import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

import Contact from './Contact/Contact';

const ContactList = ({ contacts }) => {
  const elements = contacts.map(({ name, phone, id }) => (
    <Contact name={name} phone={phone} id={id} key={id} />
  ));
  return (
    <>
      <section className={styles.contacts}>
        {contacts.length === 0 ? (
          <p>Не найдено контактов с таким именем!</p>
        ) : (
          <ol className={styles.contactsList}>{elements}</ol>
        )}
      </section>
    </>
  );
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
