import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

export default function Select(props) {
  const options = props.options.map((val) => (
    <option key={val} value={val}>
      {val}
    </option>
  ));

  return (
    <select value={props.value} onChange={props.onChange}>
      {options}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [2, 4, 6],
  value: 4,
  onChange: () => {},
};
