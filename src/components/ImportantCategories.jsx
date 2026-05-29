import React from 'react';
import { importantCategories } from '../data/important-categories';
import '../styles/important-categories.css';

export default function ImportantCategories() {
  return (
    <section className="important-categories-section">
      <div className="important-categories-container">
        <h2 className="important-categories-title">Research popular software & services.</h2>
        
        <div className="important-categories-grid">
          {importantCategories.map((category, index) => (
            <div className="important-category-group" key={index}>
              <a href="#" className="important-category-parent" title={category.parentFull || category.parent}>
                {category.parent}
              </a>
              <ul className="important-category-list">
                {category.children.map((child, childIndex) => (
                  <li className="important-category-child-item" key={childIndex}>
                    <a href="#" className="important-category-child-link">
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="important-category-group">
            <a href="#" className="important-categories-all">
              All Software
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
