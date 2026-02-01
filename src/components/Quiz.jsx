// import { useState } from "react";
// import allQuestions from "../data/questions";
// import Question from "./Question";
// import ExamTimer from "./ExamTimer";

// function shuffle(array) {
//   return [...array].sort(() => Math.random() - 0.5);
// }

// function Quiz({ onFinish }) {
//   const [questions] = useState(() => shuffle(allQuestions).slice(0, 50));
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState([]);

//   const EXAM_TIME = 60 * 60; // ⏱ 1 HOUR (3600 seconds)

//   function selectAnswer(optionIndex) {
//     const updated = [...answers];
//     updated[current] = optionIndex;
//     setAnswers(updated);
//   }

//   function next() {
//     setCurrent(prev => prev + 1);
//   }

//   function finishExam() {
//     onFinish(answers, questions);
//   }

//   // When all questions answered
//   if (current === questions.length) {
//     finishExam();
//     return null;
//   }

//   return (
//     <div>
//       {/* GLOBAL TIMER */}
//       <ExamTimer totalSeconds={EXAM_TIME} onTimeUp={finishExam} />

//       <h3 style={{ textAlign: "center" }}>
//         Question {current + 1} / {questions.length}
//       </h3>

//       <Question
//         data={questions[current]}
//         selected={answers[current]}
//         onSelect={selectAnswer}
//       />

//       <div style={{ textAlign: "center", marginBottom: "30px" }}>
//         <button
//           onClick={next}
//           disabled={answers[current] === undefined}
//           style={{
//             padding: "12px 25px",
//             fontSize: "16px",
//             borderRadius: "10px",
//             background: "#1e3c72",
//             color: "white",
//             border: "none",
//             cursor: "pointer"
//           }}
//         >
//           Next Question
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Quiz;



import { useState } from "react";
import allQuestions from "../data/questions";
import Question from "./Question";
import ExamTimer from "./ExamTimer";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function Quiz({ onFinish }) {
  const [questions] = useState(() => shuffle(allQuestions).slice(0, 50));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const EXAM_TIME = 60 * 60; // 50 hour

  function selectAnswer(optionIndex) {
    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);
  }

  function next() {
    setCurrent(prev => prev + 1);
  }

  function finishExam() {
    onFinish(answers, questions);
  }

  if (current === questions.length) {
    finishExam();
    return null;
  }

  return (
    <div style={styles.page}>
      {/* GLOBAL TIMER (Visual Only – No Sound) */}
      <ExamTimer totalSeconds={EXAM_TIME} onTimeUp={finishExam} />

      {/* EXAM HEADER */}
      <div style={styles.header}>
        <h2 style={styles.title}>Online Examination</h2>

      </div>       


      {/* PROGRESS */}
      <div style={styles.progress}>
        ጥያቄ <strong>  {current + 1}</strong> ከ{" "}
        <strong>{questions.length}</strong>
      </div>

      {/* QUESTION CARD */}
      <div style={styles.card}>
        <Question
          data={questions[current]}
          selected={answers[current]}
          onSelect={selectAnswer}
        />
      </div>

      {/* ACTIONS */}
      <div style={styles.actions}>
        <button
          onClick={next}
          disabled={answers[current] === undefined}
          style={{
            ...styles.button,
            opacity: answers[current] === undefined ? 0.5 : 1,
            cursor:
              answers[current] === undefined ? "not-allowed" : "pointer"
          }}
        >
          ቀጣይ →
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6fb",
   padding: "40px 20px",
    fontFamily: "Arial, sans-serif"
  },

  header: {
    textAlign: "center",
    marginBottom: "30px"
  },

  title: {
    margin: 0,
    color: "#1e3c72",
    fontSize: "34px",
    fontWeight: "700"
  },

  subtitle: {
    marginTop: "10px",
    color: "#555",
    fontSize: "20px"
  },

  progress: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "20px",
    color: "#333"
  },

  card: {
    maxWidth: "1050px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)"
  },

  actions: {
    textAlign: "center",
    marginTop: "35px"
  },

  button: {
    padding: "18px 50px",
    fontSize: "20px",
    borderRadius: "14px",
    background: "#1e3c72",
    color: "#ffffff",
    border: "none",
    fontWeight: "700"
  }
};

export default Quiz;
