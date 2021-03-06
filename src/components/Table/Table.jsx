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
      page: 1,
      rowsPerPage: 4,
      students: this.props.studentsData,
    };
  }

  handleSelect = (event) => {
    event.persist();
    this.setState(() => ({
      page: 1,
      rowsPerPage: +event.target.value,
    }));
  };

  handleDeleteClick = (index) => {
    this.setState((state) => {
      const students = state.students.filter((row, i) => i !== index);
      return { students };
    });
  };

  handleSubmitRow = (row) => {
    const { firstName, secondName, birthYear } = row;
    if (!firstName || !secondName || !birthYear) {
      /* global alert */
      alert('Please, fill in the input fields.');
      return;
    }
    this.setState((state) => ({ students: [...state.students, row] }));
  };

  handleNextClick = () => {
    this.setState((state) => {
      const numOfRows = state.students.length;
      if (Math.ceil(numOfRows / state.rowsPerPage) > state.page) {
        return { page: state.page + 1 };
      }
      return {};
    });
  };

  handlePrevClick = () => {
    this.setState((state) => {
      if (state.page > 1) {
        return { page: state.page - 1 };
      }
      return {};
    });
  };

  handlePageClick = (event) => {
    const page = +event.target.value;
    this.setState({ page });
  };

  renderTableRows = () => {
    const { page, rowsPerPage, students } = this.state;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageToDisplay = students
      .map((row, ind) => {
        const id = ind;
        return (
          <tr key={`${id}${row.secondName}${row.birthYear}`}>
            <td>{row.firstName}</td>
            <td>{row.secondName}</td>
            <td>{row.birthYear}</td>
            <td>
              <Button
                text="Delete"
                onClick={() => this.handleDeleteClick(ind)}
                btnRole="danger"
              />
            </td>
          </tr>
        );
      })
      .slice(start, end);
    const emptyRows = Array(rowsPerPage - pageToDisplay.length)
      .fill(null)
      .map((empty, ind) => {
        const key = ind;
        return (
          <tr key={key} className={styles.emptyRow}>
            <td colSpan="4">&nbsp;</td>
          </tr>
        );
      });

    return pageToDisplay.concat(emptyRows);
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
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
        <SubmitRow onSubmit={this.handleSubmitRow} />
        <Pagination
          value={this.state.rowsPerPage}
          onChange={this.handleSelect}
          selectOptions={[2, 4, 6]}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          handlePageClick={this.handlePageClick}
          page={this.state.page}
          pages={Math.ceil(this.state.students.length / this.state.rowsPerPage)}
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
    })
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
