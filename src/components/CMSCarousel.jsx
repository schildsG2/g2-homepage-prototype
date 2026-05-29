import React from 'react';
import { cmsSlides } from '../data/cms-content';
import '../styles/cms-carousel.css';

export default function CMSCarousel() {
  const slide = cmsSlides[0];

  return (
    <section className="cms-carousel-section">
      <div className="cms-carousel-container">
        <div className="cms-carousel-card">
          <div className="cms-carousel-content">
            <h2 className="cms-carousel-title">{slide.title}</h2>
            <p className="cms-carousel-body">{slide.body}</p>
            <a href={slide.ctaUrl} className="cms-carousel-cta">
              {slide.cta}
            </a>
          </div>
          <div className="cms-carousel-image-area">
            <div className="cms-carousel-placeholder-form">
              <div className="cms-carousel-mock-input"></div>
              <div className="cms-carousel-mock-input"></div>
              <div className="cms-carousel-mock-input"></div>
              <div className="cms-carousel-mock-button"></div>
            </div>
          </div>
        </div>

        <div className="cms-carousel-indicators">
          {cmsSlides.map((s, index) => (
            <button 
              key={s.id} 
              className={`cms-carousel-dot ${index === 0 ? 'is-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
