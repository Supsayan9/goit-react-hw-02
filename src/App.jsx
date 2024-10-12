import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
const App = () => {
  const [votingData, setVotingData] = useState(() => {
    const savedVotes = window.localStorage.getItem("saved-votes");
    return savedVotes
      ? JSON.parse(savedVotes)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;

  useEffect(() => {
    window.localStorage.setItem("saved-votes", JSON.stringify(votingData));
  }, [votingData]);

  const handleDataClick = (variant) => {
    setVotingData((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  };

  const handleReset = () => {
    setVotingData({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div id="root">
      <Description />
      <Options
        handleDataClick={handleDataClick}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          good={votingData.good}
          neutral={votingData.neutral}
          bad={votingData.bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
