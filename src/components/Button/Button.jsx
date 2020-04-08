import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const { btnRole, text, onClick, disabled } = props;
  if (btnRole === 'submit') {
    return (
      <button className={styles[btnRole]} type="submit">
        {text}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      className={styles[btnRole]}
      type="button"
      onClick={onClick}
      value={text}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  btnRole: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  btnRole: 'primary',
  text: 'Button',
  onClick: () => {},
  disabled: false,
};
