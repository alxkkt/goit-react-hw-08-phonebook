import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

import Contact from './Contact/Contact';

const ContactList = ({ contacts }) => {
  const elements = contacts.map(({ name, number, id }) => (
    <Contact name={name} number={number} id={id} key={id} />
  ));
  return (
    <>
      <section className={styles.contacts}>
        {contacts.length === 0 ? (
          <p>We couldn't find any contact with this name &#128532;</p>
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
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
