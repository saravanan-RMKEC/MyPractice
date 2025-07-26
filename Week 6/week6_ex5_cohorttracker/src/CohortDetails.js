import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, startDate, status, coach, trainer } = props;

  // Set color class based on status
  const statusClass = status.toLowerCase() === 'ongoing' ? styles.green : styles.blue;

  return (
    <div className={styles.card}>
      <h3 className={statusClass}>{name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>

        <dt>Current Status</dt>
        <dd>{status}</dd>

        <dt>Coach</dt>
        <dd>{coach}</dd>

        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
