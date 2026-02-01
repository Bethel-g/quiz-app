import { useEffect, useState } from "react";

function ExamTimer({ totalSeconds, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const progress = (timeLeft / totalSeconds) * 100;
  const isLowTime = timeLeft <= 300; // last 5 minutes

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        width: "180px",
        background: isLowTime
          ? "linear-gradient(135deg, #ff416c, #ff4b2b)"
          : "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
        padding: "14px 16px",
        borderRadius: "14px",
        fontWeight: "600",
        boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
        zIndex: 1000,
        animation: isLowTime ? "pulse 1s infinite" : "none"
      }}
    >
      <div style={{ fontSize: "13px", opacity: 0.85 }}>
        ⏱ የቀረ ሰኣት
      </div>

      <div
        style={{
          fontSize: "24px",
          letterSpacing: "1px",
          marginTop: "4px"
        }}
      >
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.3)",
          borderRadius: "4px",
          marginTop: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#fff",
            transition: "width 1s linear"
          }}
        />
      </div>

      {/* Pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default ExamTimer;
