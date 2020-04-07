import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';
import Button from '../Button/Button';
import SubmitRow from '../SubmitRow/SubmitRow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 4,
      students: this.props.studentsData,
    };
  }

  handleSelect = (event) => {
    event.persist();
    this.setState(() => ({ rowsPerPage: +event.target.value }));
  };

  handleDeleteClick = (index) => {
    this.setState((state) => {
      const students = state.students.filter((row, i) => i !== index);
      return { students };
    });
  };

  handleSubmitRow = (row) => {
    this.setState((state) => ({ students: [...state.students, row] }));
  };

  renderTableRows = () => {
    return this.state.students.map((row, ind) => {
      const id = ind;
      return (
        <tr key={`${id}${row.secondName}${row.birthYear}`}>
          <td>{row.firstName}</td>
          <td>{row.secondName}</td>
          <td>{row.birthYear}</td>
          <td>
            <Button text="Delete" onClick={() => this.handleDeleteClick(ind)} color="danger" />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className={styles.main}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Year</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
        <SubmitRow onSubmit={this.handleSubmitRow} />
        <Pagination
          value={this.state.rowsPerPage}
          onChange={this.handleSelect}
          selectOptions={[2, 4, 6]}
        />
      </div>
    );
  }
}

export default Table;

Table.propTypes = {
  studentsData: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      secondName: PropTypes.string,
      birthYear: PropTypes.number,
    }),
  ),
};

Table.defaultProps = {
  studentsData: [
    {
      firstName: 'John',
      secondName: 'Doe',
      birthYear: 1900,
    },
  ],
};
