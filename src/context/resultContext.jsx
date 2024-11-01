import { createContext, useState } from "react";

const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState({
    correct: 0,
    points: 0,
    incorrect: 0,
  });

  const totalAnswerd = result.correct + result.incorrect;

  console.log("result contextu", result.points);

  return (
    <ResultContext.Provider value={{ result, setResult, totalAnswerd }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultContextProvider };
