import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedPlayer = JSON.parse(localStorage.getItem('quizPlayer'));
    const allResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    const latestResult = allResults[allResults.length - 1];

    setPlayer(storedPlayer);
    setResult(latestResult);
  }, []);

  const resetGame = () => {
    localStorage.removeItem('quizPlayer');
    navigate('/');
  };

  const getMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return '🎉 Quiz Champion!';
    if (percentage >= 50) return '👏 Good Try! Keep Practicing!';
    return '😴 More caffeine, maybe? Try again!';
  };

  if (!player || !result) {
    return (
      <div style={{ padding: '2rem', marginTop: '100px', textAlign: 'center' }}>
        <h2>No score data available.</h2>
        <p>Please play a quiz to see your score summary.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: '2rem', padding: '1rem 2rem' }}>
          Go Home 🏠
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', marginTop: '100px', textAlign: 'center' }}>
      <h2>Well Done, {player.name}!</h2>
      <p>Score: <strong>{result.score}</strong> out of {result.total}</p>
      <p>Total Time Taken: <strong>{result.timeTaken}</strong> seconds</p>
      <h3 style={{ marginTop: '1rem' }}>{getMessage(result.score, result.total)}</h3>
      <button onClick={resetGame} style={{ marginTop: '2rem', padding: '1rem 2rem' }}>
        Play Again 🔁
      </button>
    </div>
  );
};

export default ScoreSummary;

