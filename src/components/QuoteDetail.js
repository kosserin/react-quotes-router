import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './QuoteDetail.module.css';
import HighlightedQuote from './HighlightedQuote';
import { Link, Route, Routes } from 'react-router-dom';
import Comments from './Comments';

const QuoteDetail = () => {

    const params = useParams();
    const quotes = useSelector(state => state.quote.quotes);
  
    const quote = quotes.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>;
      }

  return (
    <div className={styles['quote-detail']}>
    <HighlightedQuote id={quote.id} text={quote.text} author={quote.author} />
    <Routes>
    <Route path='/' element={<Link to={'comments'} >Show comments</Link>}></Route>
    <Route path='comments' element={<Comments />}></Route>
    </Routes>
    </div>
  )
}

export default QuoteDetail