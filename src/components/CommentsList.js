import React, {useEffect} from 'react';
import CommentItem from './CommentItem';
import styles from './CommentsList.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CommentsList = () => {

  const params = useParams();
  const comments = useSelector(state => state.comment.comments);

  return (
    <div className={styles['comments-list']}>
        {comments.map(comment => <CommentItem key={comment.id} id={comment.id} commentText={comment.commentText} />)}
    </div>
  )
}

export default CommentsList