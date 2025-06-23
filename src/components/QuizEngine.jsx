import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import './QuizEngine.css';


const QuizEngine = () => {
  const navigate = useNavigate();
  const player = JSON.parse(localStorage.getItem('quizPlayer'));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion =
    questions[player?.category]?.[player?.difficulty]?.[questionIndex];

  useEffect(() => {
    if (!player || !currentQuestion) {
      navigate('/');
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext(); // auto-skip
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questionIndex]);

  const handleSelect = (option) => {
    if (selected) return;

    setSelected(option);
    const isCorrect = option === currentQuestion.correct;
    if (isCorrect) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: option,
        correct: currentQuestion.correct,
        timeUsed: 15 - timeLeft,
      }
    ]);
  };

  const handleNext = () => {
    setTimeLeft(15);
    setSelected(null);

    if (questionIndex + 1 < questions[player.category][player.difficulty].length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      const finalData = {
        name: player.name,
        score,
        total: questions[player.category][player.difficulty].length,
        timeTaken: answers.reduce((t, a) => t + a.timeUsed, 0),
        answers
      };

      const prev = JSON.parse(localStorage.getItem('quizResults')) || [];
      localStorage.setItem('quizResults', JSON.stringify([...prev, finalData]));
      navigate('/score');
    }
  };

return (
  <div className="quiz-container">
    <h2>Question {questionIndex + 1}</h2>
    <p>{currentQuestion?.question}</p>
    <div>
      {currentQuestion?.options.map((opt, idx) => (
        <button
          key={idx}
          className={`option-button ${
            selected
              ? opt === currentQuestion.correct
                ? 'correct'
                : opt === selected
                ? 'wrong'
                : ''
              : ''
          }`}
          onClick={() => handleSelect(opt)}
          disabled={!!selected}
        >
          {opt}
        </button>
      ))}
    </div>
    <p className="timer">Time left: {timeLeft}s</p>
    <button
      className="next-button"
      onClick={handleNext}
      disabled={!selected}
    >
      {questionIndex + 1 < questions[player.category][player.difficulty].length
        ? 'Next'
        : 'Finish'}
    </button>
  </div>
);

};

export default QuizEngine;
