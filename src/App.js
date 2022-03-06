import React, {useEffect} from "react";
import Header from "./components/Header";
import {Route, Routes, Navigate} from 'react-router-dom';
import Quotes from './pages/Quotes.js';
import NewQuote from './pages/NewQuote.js';
import { fetchQuoteData, sendQuoteData } from "./store/quote-action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Notification from './components/Notification';
import QuoteDetail from './components/QuoteDetail';
import Comments from './components/Comments';
import NotFound from './pages/NotFound';
// import { fetchCommentData } from "./store/comment-action";

let isInitial = true;

const App = () => {

  const quotes = useSelector(state => state.quote.quotes);
  const quoteChanged = useSelector(state => state.quote.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuoteData());
    // dispatch(fetchCommentData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(quoteChanged) {
      dispatch(sendQuoteData(quotes));
    }
  }, [quotes, dispatch, quoteChanged]);

  return (
    <React.Fragment>
      <Header />
      <Notification />
      <Routes>
      <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
        <Route path='/quotes/:quoteId/comments' element={<Comments />} />
        </Route>  
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
