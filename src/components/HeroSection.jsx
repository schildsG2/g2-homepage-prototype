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
          <form className="elv-rounded-search" role="search" action="#" method="get">
            <div className="elv-rounded-search__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M15.9375 17L10.9583 12.0208C10.5417 12.3264 10.0848 12.566 9.58767 12.7396C9.09056 12.9132 8.56158 13 8.00073 13C6.61135 13 5.43056 12.5139 4.45833 11.5417C3.48611 10.5694 3 9.38889 3 8C3 6.61111 3.48611 5.43056 4.45833 4.45833C5.43056 3.48611 6.61111 3 8 3C9.38889 3 10.5694 3.48611 11.5417 4.45833C12.5139 5.43056 13 6.61135 13 8.00073C13 8.56158 12.9132 9.09056 12.7396 9.58767C12.566 10.0848 12.3264 10.5417 12.0208 10.9583L17 15.9375L15.9375 17ZM8 11.5C8.97222 11.5 9.79861 11.1597 10.4792 10.4792C11.1597 9.79861 11.5 8.97222 11.5 8C11.5 7.02778 11.1597 6.20139 10.4792 5.52083C9.79861 4.84028 8.97222 4.5 8 4.5C7.02778 4.5 6.20139 4.84028 5.52083 5.52083C4.84028 6.20139 4.5 7.02778 4.5 8C4.5 8.97222 4.84028 9.79861 5.52083 10.4792C6.20139 11.1597 7.02778 11.5 8 11.5Z"/>
              </svg>
            </div>
            <label htmlFor="hero-search" className="elv-sr-only" style={{ display: 'none' }}>Search software</label>
            <input 
              id="hero-search" 
              type="text" 
              className="elv-rounded-search__input" 
              placeholder="Search software" 
              autoComplete="off"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button 
              type="button" 
              className={`elv-rounded-search__clear ${searchValue.length > 0 ? 'is-visible' : ''}`} 
              aria-label="Clear search"
              onClick={() => setSearchValue('')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1111 18 10 18ZM10 16.5C11.8056 16.5 13.3403 15.8681 14.6042 14.6042C15.8681 13.3403 16.5 11.8056 16.5 10C16.5 8.19444 15.8681 6.65972 14.6042 5.39583C13.3403 4.13194 11.8056 3.5 10 3.5C8.19444 3.5 6.65972 4.13194 5.39583 5.39583C4.13194 6.65972 3.5 8.19444 3.5 10C3.5 11.8056 4.13194 13.3403 5.39583 14.6042C6.65972 15.8681 8.19444 16.5 10 16.5ZM7.0625 14L10 11.0625L12.9375 14L14 12.9375L11.0625 10L14 7.0625L12.9375 6L10 8.9375L7.0625 6L6 7.0625L8.9375 10L6 12.9375L7.0625 14Z"/>
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
