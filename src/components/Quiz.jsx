import React, { useCallback, useContext, useEffect, useState } from "react";
import RemainingTime from "./RemainingTime";
import questions from "../questions";
import { ResultContext } from "../context/resultContext";

const Quiz = ({ question, answers, setSelectedQuestion, selectedQuestion }) => {
  const [shuffledAnswers, setShuffledAnswer] = useState([...answers]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { result, setResult } = useContext(ResultContext);

  useEffect(() => {
    setShuffledAnswer((prevAns) =>
      [...prevAns].sort(() => Math.random() - 0.5)
    );
  }, [answers]);

  const changeQuestion = useCallback(() => {
    setSelectedQuestion((prev) => prev - 1);
  }, []);

  const onAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    if (selectedAnswer != null) {
      let correctAnswer = questions[selectedQuestion].answers[0];
      if (selectedAnswer === correctAnswer) {
        setResult((prevResult) => ({
          ...prevResult,
          correct: (prevResult.correct += 1),
          points: (prevResult.points += 10),
        }));
      } else {
        setResult((prevResult) => ({
          ...prevResult,
          incorrect: (prevResult.incorrect += 1),
        }));
      }
    }
  }, [selectedAnswer, selectedQuestion]);
  console.log(selectedAnswer);
  return (
    <>
      <RemainingTime
        changeQuestion={changeQuestion}
        selectedAnswer={selectedAnswer}
      />
      <div className="max-w-lg mx-auto mt-16 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <div>
          <ol className="list-inside space-y-2">
            {shuffledAnswers.map((value, index) => {
              return (
                <li key={index}>
                  <button
                    className="block w-full text-left p-3 my-4 bg-gray-200 rounded-lg shadow hover:bg-gray-400 transition duration-200 "
                    onClick={() => onAnswerClick(value)}
                    disabled={selectedAnswer}
                  >
                    {value}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Quiz;
