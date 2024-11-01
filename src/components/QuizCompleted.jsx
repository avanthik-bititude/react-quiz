import React from "react";
import Result from "./Result";

const QuizCompleted = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Quiz Completed!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for participating! You have completed the quiz.
      </p>
      <Result />
    </div>
  );
};

export default QuizCompleted;
