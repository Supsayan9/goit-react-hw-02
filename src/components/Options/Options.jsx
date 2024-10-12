import styles from "./Options.module.css";

const Options = ({ handleDataClick, handleReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button
        className={`${styles.button} ${styles.buttonGood}`}
        type="button"
        onClick={() => handleDataClick("good")}
      >
        Good
      </button>
      <button
        className={`${styles.button} ${styles.buttonNeutral}`}
        type="button"
        onClick={() => handleDataClick("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${styles.button} ${styles.buttonBad}`}
        type="button"
        onClick={() => handleDataClick("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button
          className={`${styles.button} ${styles.buttonReset}`}
          type="button"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      ) : (
        " "
      )}
    </div>
  );
};
export default Options;
