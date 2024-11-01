// src/App.js
import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import questions from "./questions";
import QuizCompleted from "./components/QuizCompleted";
import { ResultContext } from "./context/resultContext";
import Instructions from "./components/Instructions";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(
    questions.length > 0 ? questions.length - 1 : -1
  );
  const [isStart, setIsStart] = useState(false);

  const { result } = useContext(ResultContext);

  const handleIsStart = () => {
    setIsStart((prevState) => !prevState);
  };
  console.log(result);
  return (
    <>
      <Header />
      {!isStart && (
        <>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleIsStart}
              className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-200"
            >
              Click here to start quiz
            </button>
          </div>
          <Instructions />
        </>
      )}
      {isStart && (
        <>
          {selectedQuestion >= 0 ? (
            <Quiz
              key={questions[selectedQuestion].id}
              question={questions[selectedQuestion].text}
              answers={questions[selectedQuestion].answers}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
            />
          ) : (
            <>
              <QuizCompleted />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
