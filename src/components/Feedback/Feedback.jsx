import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <div className={styles.feedback}>
      <ul className={styles.feedbackList}>
        <li className={styles.feedbackItem}>Good: {good}</li>
        <li className={styles.feedbackItem}>Neutral: {neutral}</li>
        <li className={styles.feedbackItem}>Bad: {bad}</li>
        <li className={styles.feedbackItem}>Total: {totalFeedback}</li>
        <li className={styles.feedbackItem}>
          Positive:{" "}
          {totalFeedback > 0
            ? Math.round((good / totalFeedback) * 100) + "%"
            : " ..."}
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
