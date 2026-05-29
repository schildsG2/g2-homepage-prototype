import React, { useState } from 'react';
import { categories } from '../data/categories';
import { productsByCategory } from '../data/products';
import '../styles/category-selector.css';

function StarRating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={`full-${i}`} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <svg key="half" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="var(--bg-neutral-10)" />
          </linearGradient>
        </defs>
        <path fill="url(#half-star)" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} width="16" height="16" viewBox="0 0 24 24" fill="var(--bg-neutral-10)" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    );
  }

  return <div className="product-card-stars">{stars}</div>;
}

export default function CategorySelector() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const products = productsByCategory[activeCategory] || [];

  return (
    <section className="category-selector-section">
      <div className="category-selector-container">
        <div className="category-selector-header">
          <h2 className="category-selector-title">Most Popular Software Categories</h2>
          <a href="#" className="category-selector-see-all">
            See all {activeCategory} Software
          </a>
        </div>

        <div className="category-selector-layout">
          <div className="category-selector-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-selector-tab ${category === activeCategory ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="category-selector-grid">
            {products.map((product) => (
              <a href="#" className="product-card" key={product.name}>
                <img src={product.logoUrl} alt={`${product.name} logo`} className="product-card-logo" />
                <h3 className="product-card-name">{product.name}</h3>
                <div className="product-card-meta">
                  <StarRating rating={product.rating} />
                  <span className="product-card-reviews">({product.reviews})</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a href="#" className="category-selector-mobile-see-all">
          See all {activeCategory} Software
        </a>
      </div>
    </section>
  );
}
