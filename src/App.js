import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import './App.css';

function App() {
  const [screen, setScreen] = useState("home"); // home, quiz, result
  const [lastAnswers, setLastAnswers] = useState([]);
  const [lastQuestions, setLastQuestions] = useState([]);

  function handleStart() {
    setScreen("quiz");
  }

  function handleFinish(answers, questions) {
    setLastAnswers(answers);
    setLastQuestions(questions);
    setScreen("result");
  }

  function handleBackHome() {
    setScreen("home");
  }

  return (
    <>
      {screen === "home" && <Home onStart={handleStart} />}
      {screen === "quiz" && <Quiz onFinish={handleFinish} />}
      {screen === "result" && (
        <Result
          answers={lastAnswers}
          questions={lastQuestions}
          onBackHome={handleBackHome}
        />
      )}
    </>
  );
}

export default App;
