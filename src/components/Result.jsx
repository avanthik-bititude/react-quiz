import React, { useContext } from "react";
import { ResultContext } from "../context/resultContext";
import questions from "../questions";

const Result = () => {
  const { result, totalAnswerd } = useContext(ResultContext);

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Quiz Results</h2>
      <div className="space-y-4">
        <p className="text-lg">
          <span className="font-bold">Correct Answers:</span> {result.correct}
        </p>
        <p className="text-lg">
          <span className="font-bold">Incorrect Answers:</span>
          {result.incorrect}
        </p>
        <p className="text-lg">
          <span className="font-bold">
            Total Answered: {totalAnswerd} / {questions.length}
          </span>
        </p>
        <p className="text-lg">
          <span className="font-bold">Total Points:</span> {result.points}
        </p>
      </div>
    </div>
  );
};

export default Result;
