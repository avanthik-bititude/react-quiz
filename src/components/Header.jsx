import React from "react";
import quizeLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-600 p-4 shadow-lg">
        <img className="w-16 h-16 mr-4" src={quizeLogo} alt="quiz logo" />
        <h1 className="text-white text-2xl font-bold">React Quiz</h1>
      </div>
    </>
  );
};

export default Header;
