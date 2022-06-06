import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import styles from './NewUserForm.module.css';

const NewUserForm = ({ data, onSubmit, isLoading, isSuccess }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const userName = e.currentTarget.elements.name.value;
    const duplicate = data.find(({ name }) => name === userName);
    if (duplicate) {
      Notiflix.Notify.warning(`You already have ${userName} in your contacts!`);
      return;
    }
    console.log('До submit: ', isSuccess);
    onSubmit({
      name: userName,
      phone: e.currentTarget.elements.phone.value,
    });

    console.log('Inside Submit: ', isSuccess);

    e.currentTarget.reset();
  };
  console.log('После Submit: ', isSuccess);
  return (
    <div className={styles.container}>
      {/* {isSuccess && Notiflix.Notify.success('Contact added to your phonebook!')} */}
      <h1 className={styles.title}>Phonebook</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="">Number</label>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" disabled={isLoading} className={styles.formBtn}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default NewUserForm;

NewUserForm.defaultProps = {
  data: [],
};

NewUserForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};
