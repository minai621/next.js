import React from 'react';
import styles from '../styles/app.module.css';

export default function ProtectedRoute() {
  return (
    <div className={styles.container}>
      <h1>ProtectedRoute</h1>
      <p>You can't see me if not logged-in!</p>
    </div>
  );
}
