import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { commentActions } from '../store';
import styles from './NewComment.module.css';
import { sendCommentData } from '../store/comment-action';
import { useParams } from 'react-router-dom';

const NewComment = () => {

  const params = useParams();
  const commentValueRef = useRef();
  const dispatch = useDispatch();
  const {quoteId} = params;

  const addCommentHandler = e => {
    e.preventDefault();
    dispatch(commentActions.addComment({
      id: `c${Math.random().toString(36)}`,
      commentText: commentValueRef.current.value,
      quoteId: quoteId
    }))
  }

  return (
    <div className={styles['new-comment']}>
    <h2>Add comment</h2>
    <form>
        <div className={styles['form-group']}>
            <label htmlFor='commentInput'>Comment</label>
            <textarea ref={commentValueRef} id='commentInput' type="text" />
        </div>
        <button type='submit' onClick={addCommentHandler}>Add comment</button>
    </form>
    </div>
  )
}

export default NewComment