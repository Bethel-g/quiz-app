import { useEffect, useState } from "react";

function Timer({ seconds, onTimeout, questionIndex }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    setTime(seconds);
  }, [questionIndex, seconds]);

  useEffect(() => {
    if (time === 0) {
      onTimeout();
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, onTimeout]);

  return <div className="timer">⏱ የቀረ ሰኣት: {time}s</div>;
}

export default Timer;
