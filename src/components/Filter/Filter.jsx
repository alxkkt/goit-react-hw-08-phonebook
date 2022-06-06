import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ handleChange }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      <label htmlFor="" className={styles.label}>
        Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.input}
        onChange={({ target }) => handleChange(target.value)}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
