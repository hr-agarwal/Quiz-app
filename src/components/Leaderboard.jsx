import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [sortBy, setSortBy] = useState('score');
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('quizResults')) || [];

    // Add date if missing
    const updated = results.map((r) => ({
      ...r,
      date: r.date || new Date().toLocaleString()
    }));

    setData(updated);
    localStorage.setItem('quizResults', JSON.stringify(updated));
  }, []);

  const sorted = [...data].sort((a, b) =>
    sortBy === 'score' ? b.score - a.score : a.timeTaken - b.timeTaken
  );

  return (
    <div style={{ padding: '2rem', marginTop: '100px' }}>
      <h2>Leaderboard 🏆</h2>
      <div style={{ margin: '1rem 0' }}>
        Sort by:{' '}
        <button onClick={() => setSortBy('score')}>Score</button>
        <button onClick={() => setSortBy('time')}>Time Taken</button>
      </div>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Time Taken (s)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan="4">No results yet</td>
            </tr>
          ) : (
            sorted.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.score} / {entry.total}</td>
                <td>{entry.timeTaken}</td>
                <td>{entry.date}</td>
              </tr>
            ))
          )}
        </tbody>
        <div style={{ marginTop: '2rem' }}>
  <button
    onClick={() => {
      if (confirm('Are you sure you want to clear the leaderboard?')) {
        localStorage.removeItem('quizResults');
        setData([]);
      }
    }}
    style={{ backgroundColor: 'crimson', color: '#fff', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '6px' }}
  >
    Clear Leaderboard 🗑️
  </button>
</div>

      </table>
    </div>
  );
};

export default Leaderboard;
