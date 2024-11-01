import React, { useEffect, useState } from "react";
const timer = 5000;

const RemainingTime = ({ changeQuestion, selectedAnswer }) => {
  console.log("REMAININGTIME rendering");
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    if (remainingTime <= 0) {
      changeQuestion();
    }
    const remainingTimeInterval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(remainingTimeInterval);
          return 0;
        } else if (selectedAnswer) {
          clearInterval(remainingTimeInterval);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => {
      clearInterval(remainingTimeInterval);
    };
  }, [changeQuestion, selectedAnswer, remainingTime]);

  // console.log("remaining time  in 3000: ", remainingTime);

  const percentage = ((remainingTime / timer) * 100).toFixed(2);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Remaining Time</h2>
      <div className="relative mb-4">
        <div className="h-4 bg-gray-300 rounded">
          <div
            className="h-full bg-gray-600 rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RemainingTime;
