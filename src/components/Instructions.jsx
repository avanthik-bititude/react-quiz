import React from "react";

const Instructions = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Quiz Instructions</h2>
      <p className="mb-2">
        Welcome to the quiz! Please read the instructions carefully before
        starting.
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Each question has multiple-choice answers.</li>
        <li>Click on the answer you believe is correct.</li>
        <li>You have a limited time 5sec to answer each question.</li>
        <li>At the end of the quiz, your results will be displayed.</li>
        <li>Good luck!</li>
      </ul>
    </div>
  );
};

export default Instructions;
