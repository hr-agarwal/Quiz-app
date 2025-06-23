import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-left">
        <h1>
          Welcome to <span className="highlight">NebulaQuiz</span> 🚀
        </h1>
        <p>
          Blast off into learning! Test your knowledge across space, science, and fun facts. Ready to rise up the ranks?
        </p>
      </div>
      <div className="hero-right svg-wrapper">
        <img
          src="/undraw_multiple-choice_9n00.svg"
          alt="Quiz SVG"
          className="hero-img smaller"
        />
      </div>
    </div>
    <div className="hero-center">
      <a href="/start">
        <button className="hero-btn">Start Quiz</button>
      </a>
    </div>
  </section>
);

export default HeroSection;