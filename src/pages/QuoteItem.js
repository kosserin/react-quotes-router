import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuoteItem.module.css';

const QuoteItem = (props) => {

  return (
    <div className={styles['quote-item']}>
    <p>{props.text}</p>
    <span>{props.author}</span>
    <Link to={`${props.id}`}>View FullScreen</Link>
    </div>
  )
}

export default QuoteItem;