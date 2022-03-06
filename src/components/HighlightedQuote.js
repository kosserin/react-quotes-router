import React from 'react';

import styles from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <div className={styles['highlighted-quote']}>
    <h1>{props.text}</h1>
    <span>{props.author}</span>
    </div>
  )
}

export default HighlightedQuote