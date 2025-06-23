import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPlayerForm.css';


const AddPlayerForm = () => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({
    name: '',
    category: '',
    difficulty: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const { name, category, difficulty } = player;
    setIsDisabled(!(name && category && difficulty));
  }, [player]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('quizPlayer', JSON.stringify(player));
    navigate('/quiz/start');
  };

  return (
  <div className="add-form-container">
    <h2>Enter Your Quiz Preferences</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={player.name} onChange={handleChange} required />
      </label>

      <label>
        Category:
        <select name="category" value={player.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </label>

      <label>
        Difficulty:
        <select name="difficulty" value={player.difficulty} onChange={handleChange} required>
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>

      <button type="submit" disabled={isDisabled}>
        Start Quiz
      </button>
    </form>
  </div>
);

};

export default AddPlayerForm;
