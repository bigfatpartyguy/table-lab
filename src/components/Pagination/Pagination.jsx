import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import styles from './Pagination.module.css';

export default function Pagination(props) {
  const { selectOptions, onChange, value } = props;
  return (
    <div className={styles.pagination}>
      <button>Previous</button>
      <Select options={selectOptions} value={value} onChange={onChange} />
      <button>Next</button>
    </div>
  );
}

Pagination.propTypes = {
  selectOptions: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  value: PropTypes.number,
};

Pagination.defaultProps = {
  selectOptions: [2, 4, 6],
  onChange: () => {},
  value: 4,
};
