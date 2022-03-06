import React from 'react';
import QuoteItem from './QuoteItem';
import { useSelector } from 'react-redux';
import styles from './Quotes.module.css';
import {FaSpinner} from '../../node_modules/react-icons/fa'
import { Link } from 'react-router-dom';

const Quotes = () => {

    const quotes = useSelector(state => state.quote.quotes);
    const notificationStatus = useSelector(state => state.notification.status);

  return (
    <div className={styles.quotes}>
        {quotes.map(quote => <QuoteItem id={quote.id} key={quote.id} text={quote.text} author={quote.author} />)}
        {quotes.length === 0 && <p className={styles.paragraph}>There are no quotes to display. But hey, you can <Link to="/new-quote">create new quote!</Link></p>}
        {notificationStatus === 'loading' && <FaSpinner />}
    </div>
  )
}

export default Quotes