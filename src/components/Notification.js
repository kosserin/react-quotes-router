import React from 'react';
import styles from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = () => {

  const notificationStatus = useSelector(state => state.notification.status);
  const notificationText = useSelector(state => state.notification.text);

  return (
    <div className={`${styles.notification} ${notificationStatus === 'loading' && styles.loading} ${notificationStatus === 'success' && styles.success} ${notificationStatus === 'error' && styles.error}`}>
    {notificationText}
    </div>
  )
}

export default Notification