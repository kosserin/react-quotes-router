import React, {useState} from 'react';
import NewComment from './NewComment';
import CommentsList from './CommentsList';
import styles from './Comments.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Comments = () => {

  const [isAdding, setIsAdding] = useState(false);

  const addCommentHandler = e => {
    setIsAdding(true);
  }

  return (
    <div className={styles.comments}>
    {isAdding && <NewComment />}
    {!isAdding && <button className={styles.button} onClick={addCommentHandler}>Add comment</button>}
    <CommentsList />
    </div>
  )
}

export default Comments