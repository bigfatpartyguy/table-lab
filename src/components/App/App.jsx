import React from 'react';
import Table from '../Table/Table';
import students from '../../Data';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Table studentsData={students} />
    </div>
  );
}
