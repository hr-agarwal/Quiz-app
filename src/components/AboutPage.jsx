import React from 'react';
import './AboutPage.css';
import quizMeme from '../assets/quiz-meme.png';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container dark">
      <h2>😎 About This Legendary Quiz App</h2>

      <p>
        Welcome to the land of questions, confusion, and random guesswork. This isn't just a quiz app — it's a
        <strong> battlefield of brains</strong>, a <strong>temple of trivia</strong>, and your final boss if you're bored. 🧠⚔️🎯
      </p>

      <h3>🎯 What This App Does (Besides Stress You Out)</h3>
      <ul>
        <li>✅ Tests your knowledge (or luck)</li>
        <li>🤯 Makes you question your education</li>
        <li>🎉 Lets you brag when you score high</li>
        <li>😂 Laugh when you see memes after failing</li>
      </ul>

      <h3>🧠 How to Master This Quiz:</h3>
      <ul>
        <li>🫣 Take a deep breath</li>
        <li>🎲 Click randomly (sometimes works)</li>
        <li>⏱️ Blame the timer</li>
        <li>🔁 Repeat until genius mode unlocks</li>
      </ul>

      <h3>💡 Random Life Advice:</h3>
      <ul>
        <li>🕵️‍♂️ Don’t trust options B and C. They’re suspicious.</li>
        <li>🔀 If in doubt, choose “All of the above” (sadly, we removed those).</li>
        <li>🧠 Refresh your brain, not just the browser.</li>
      </ul>

      <h3>😂 The Ultimate Truth:</h3>
      <img src={quizMeme} alt="Quiz Meme" className="about-meme" />

      <p className="about-note">
        “Getting 0 on a quiz builds character.” – Someone who definitely failed it 😅
      </p>

      <button className="home-button" onClick={() => navigate('/')}>🏠 Back to Home</button>
    </div>
  );
};

export default AboutPage;


