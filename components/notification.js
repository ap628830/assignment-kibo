import { useEffect } from 'react';

const Notification = ({ message, showNotification }) => {
  return <div className={`notification ${showNotification? 'show':''}`}>{message}</div>;
};

export default Notification;
