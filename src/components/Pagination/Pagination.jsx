import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import styles from './Pagination.module.css';
import Button from '../Button/Button';

export default function Pagination(props) {
  const {
    selectOptions,
    onChange,
    value,
    handleNextClick,
    handlePrevClick,
    handlePageClick,
    page,
    pages,
  } = props;
  const pagination = Array(pages)
    .fill(null)
    .map((empty, index) => {
      const key = index;
      let active;
      if (key + 1 === page) {
        active = 'active';
      }
      return (
        <Button
          disabled={active && true}
          btnRole={active}
          onClick={handlePageClick}
          key={key}
          text={String(index + 1)}
        />
      );
    });
  return (
    <div className={styles.pagination}>
      <Button disabled={page === 1} onClick={handlePrevClick} text="Previous" />
      <Select options={selectOptions} value={value} onChange={onChange} />
      {pagination}
      <Button disabled={page === pages} onClick={handleNextClick} text="Next" />
    </div>
  );
}

Pagination.propTypes = {
  selectOptions: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  handleNextClick: PropTypes.func,
  handlePrevClick: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number,
  value: PropTypes.number,
};

Pagination.defaultProps = {
  selectOptions: [2, 4, 6],
  onChange: () => {},
  handleNextClick: () => {},
  handlePrevClick: () => {},
  page: 1,
  pages: 1,
  value: 4,
};
