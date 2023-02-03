import React from 'react';
import styles from '../styles/app.module.css';
import { useRouter } from 'next/router';
import { useAuth } from './lib/hooks/useAuth';

export default function ProtectedRoute() {
  const router = useRouter();
  const { loading, error, loggedIn } = useAuth();
  if (!loading && !loggedIn) {
    router.push('/login');
  }
  return (
    <div className={styles.container}>
      {loading && <p>loading</p>}
      {error && <p>error occured</p>}
      {loggedIn && (
        <>
          <h1>ProtectedRoute</h1>
          <p>You can't see me if not logged-in!</p>
        </>
      )}
    </div>
  );
}
