import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <label htmlFor="" className={styles.label}>
        Find contact by name
      </label>
      <input
        type="text"
        value={filter}
        name="filter"
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
