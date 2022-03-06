import React from 'react';
import styles from './CommentItem.module.css';

const CommentItem = (props) => {

  return (
    <div className={styles['comment-item']} id={props.id}>
        <p>{props.commentText}</p>
    </div>
  )
}

export default CommentItem