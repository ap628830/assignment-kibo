
const Notification = ({ message, showNotification }) => {
  return <div data-testid="notification" className={`notification ${showNotification? 'show':''}`}>{message}</div>;
};

export default Notification;
