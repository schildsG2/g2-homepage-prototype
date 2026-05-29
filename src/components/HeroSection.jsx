import React, { useState } from 'react';
import '../styles/hero.css';

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Where you go for software.</h1>
        <p className="hero-subtitle">
          Find the right software and services based on <a href="#" className="hero-subtitle-link">3,486,300+</a> real reviews.
        </p>
        
        <div className="hero-search-wrapper">
          <form className="hero-search" role="search" action="#" method="get">
            <input
              id="hero-search"
              type="text"
              className="hero-search__input"
              placeholder="Search software"
              autoComplete="off"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="hero-search__btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M15.9375 17L10.9583 12.0208C10.5417 12.3264 10.0848 12.566 9.58767 12.7396C9.09056 12.9132 8.56158 13 8.00073 13C6.61135 13 5.43056 12.5139 4.45833 11.5417C3.48611 10.5694 3 9.38889 3 8C3 6.61111 3.48611 5.43056 4.45833 4.45833C5.43056 3.48611 6.61111 3 8 3C9.38889 3 10.5694 3.48611 11.5417 4.45833C12.5139 5.43056 13 6.61135 13 8.00073C13 8.56158 12.9132 9.09056 12.7396 9.58767C12.566 10.0848 12.3264 10.5417 12.0208 10.9583L17 15.9375L15.9375 17ZM8 11.5C8.97222 11.5 9.79861 11.1597 10.4792 10.4792C11.1597 9.79861 11.5 8.97222 11.5 8C11.5 7.02778 11.1597 6.20139 10.4792 5.52083C9.79861 4.84028 8.97222 4.5 8 4.5C7.02778 4.5 6.20139 4.84028 5.52083 5.52083C4.84028 6.20139 4.5 7.02778 4.5 8C4.5 8.97222 4.84028 9.79861 5.52083 10.4792C6.20139 11.1597 7.02778 11.5 8 11.5Z"/>
              </svg>
            </button>
          </form>
        </div>
        
        <div className="hero-quick-links">
          <a href="#" className="hero-quick-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--palette-purple-100)" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Best Products 2026
          </a>
          <a href="#" className="hero-quick-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--palette-rorange-100)" d="M16 6L18.29 8.29L13.41 13.17L9.41 9.29L2 16.71L3.41 18.12L9.41 12.12L13.41 16L19.71 9.71L22 12V6H16Z" />
            </svg>
            Trending Products
          </a>
        </div>
      </div>
    </section>
  );
}
