import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { quoteActions } from '../store/index';
import { useNavigate } from 'react-router-dom';
import {FaSpinner} from '../../node_modules/react-icons/fa'
import styles from './NewQuote.module.css';
import { useSelector } from 'react-redux';

const NewQuote = () => {
  const navigate = useNavigate();
  const textValueRef = useRef();
  const authorValueRef = useRef();
  const dispatch = useDispatch();
  const notificationStatus = useSelector(state => state.notification.status);

  const formSubmitHandler = e => {
    e.preventDefault();
    if(textValueRef.current.value !== "" && authorValueRef.current.value !== "") {
      dispatch(quoteActions.addQuote({
        id: `q${Math.random().toString(36)}`,
        text: textValueRef.current.value,
        author: authorValueRef.current.value,
      }))
      navigate('/quotes');
    }
  }

  return (
    <div className={styles['new-quote']}>
    <h2>Add new quote!</h2>
    <form action='#'>
        {notificationStatus !== 'loading' ? <React.Fragment>
      <div className={styles['form-group']}>
        <label>Quote Text</label>
        <input type="text" ref={textValueRef} required />
      </div>
      <div className={styles['form-group']}>
        <label>Quote Author</label>
        <input type="text" ref={authorValueRef} required />
      </div>
        <button onClick={formSubmitHandler} type="submit">Add Quote</button>
      </React.Fragment> : <FaSpinner />}
    </form>
    </div>
  )
}

export default NewQuote