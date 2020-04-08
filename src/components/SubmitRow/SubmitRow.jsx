import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitRow.module.css';
import Button from '../Button/Button';

export default class SubmitRow extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstName: '',
      secondName: '',
      birthYear: '',
    };
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const row = { ...this.state };
    row.birthYear = +row.birthYear;
    this.props.onSubmit(row);
    this.setState(this.initialState);
  };

  render() {
    const { firstName, secondName, birthYear } = this.state;
    return (
      <form className={styles.main} onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          First Name
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor="surname">
          Second Name
          <input
            id="secondName"
            type="text"
            name="secondName"
            value={secondName}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor="year">
          Birth Year
          <input
            id="birthYear"
            type="number"
            name="birthYear"
            value={birthYear}
            onChange={this.handleChange}
          />
        </label>
        <Button btnRole="submit" text="Add" />
      </form>
    );
  }
}

SubmitRow.propTypes = {
  onSubmit: PropTypes.func,
};

SubmitRow.defaultProps = {
  onSubmit: (event) => {
    event.preventDefault();
  },
};
