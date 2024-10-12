import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={styles.notification}>
      <p className={styles.notificationText}>No feedback yet</p>
    </div>
  );
};

export default Notification;
