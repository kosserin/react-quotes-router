import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
    <h1>Whoops! The page you are looking is not found!</h1>
    <Link to="/">Go back</Link>
    </div>
  )
}

export default NotFound