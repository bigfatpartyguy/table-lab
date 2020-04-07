import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    type,
    text,
    onClick,
    color,
  } = props;
  if (type === 'submit') {
    return (
      <button className={styles[color]} type="submit">{text}</button>
    );
  }
  return (
    <button className={styles[color]} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: 'Button',
  onClick: () => {},
  color: 'primary',
};
