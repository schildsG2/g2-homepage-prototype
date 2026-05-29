import React, { useState, useEffect } from 'react';
import '../styles/g2-topbar.css';

export default function G2Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="elv-g2-topnav">
        <div className="elv-g2-topnav__inner">
          <div className="elv-g2-topnav__item elv-g2-topnav__item--logo">
            <a href="#" className="elv-g2-topnav__logo" aria-label="G2 - Business Software Reviews">
              <img src="/images/g2-logo-rorange.svg" alt="" />
            </a>
          </div>

          <div className="elv-g2-topnav__search">
            <form className="elv-rounded-search js-search-form" role="search" action="#" method="get">
              <div className="elv-rounded-search__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M15.9375 17L10.9583 12.0208C10.5417 12.3264 10.0848 12.566 9.58767 12.7396C9.09056 12.9132 8.56158 13 8.00073 13C6.61135 13 5.43056 12.5139 4.45833 11.5417C3.48611 10.5694 3 9.38889 3 8C3 6.61111 3.48611 5.43056 4.45833 4.45833C5.43056 3.48611 6.61111 3 8 3C9.38889 3 10.5694 3.48611 11.5417 4.45833C12.5139 5.43056 13 6.61135 13 8.00073C13 8.56158 12.9132 9.09056 12.7396 9.58767C12.566 10.0848 12.3264 10.5417 12.0208 10.9583L17 15.9375L15.9375 17ZM8 11.5C8.97222 11.5 9.79861 11.1597 10.4792 10.4792C11.1597 9.79861 11.5 8.97222 11.5 8C11.5 7.02778 11.1597 6.20139 10.4792 5.52083C9.79861 4.84028 8.97222 4.5 8 4.5C7.02778 4.5 6.20139 4.84028 5.52083 5.52083C4.84028 6.20139 4.5 7.02778 4.5 8C4.5 8.97222 4.84028 9.79861 5.52083 10.4792C6.20139 11.1597 7.02778 11.5 8 11.5Z"/>
                </svg>
              </div>
              <label htmlFor="desktop-search" className="elv-sr-only" style={{ display: 'none' }}>Search Software and Services</label>
              <input 
                id="desktop-search" 
                type="text" 
                className="elv-rounded-search__input js-search-input" 
                placeholder="Search Software and Services" 
                autoComplete="off"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button 
                type="button" 
                className={`elv-rounded-search__clear js-search-clear ${searchValue.length > 0 ? 'is-visible' : ''}`} 
                aria-label="Clear search"
                onClick={() => setSearchValue('')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1111 18 10 18ZM10 16.5C11.8056 16.5 13.3403 15.8681 14.6042 14.6042C15.8681 13.3403 16.5 11.8056 16.5 10C16.5 8.19444 15.8681 6.65972 14.6042 5.39583C13.3403 4.13194 11.8056 3.5 10 3.5C8.19444 3.5 6.65972 4.13194 5.39583 5.39583C4.13194 6.65972 3.5 8.19444 3.5 10C3.5 11.8056 4.13194 13.3403 5.39583 14.6042C6.65972 15.8681 8.19444 16.5 10 16.5ZM7.0625 14L10 11.0625L12.9375 14L14 12.9375L11.0625 10L14 7.0625L12.9375 6L10 8.9375L7.0625 6L6 7.0625L8.9375 10L6 12.9375L7.0625 14Z"/>
                </svg>
              </button>
            </form>
          </div>

          <ul className="elv-g2-topnav__nav" role="menubar" aria-label="G2 Top Navigation Menu">
            <li className="elv-g2-topnav__nav-li elv-g2-topnav__nav-li--hoverable" role="none">
              <button className="elv-g2-topnav__link" role="menuitem" aria-haspopup="true" aria-expanded="false">
                Software
                <span className="elv-g2-topnav__link-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10 13.0625L5 8.0625L6.0625 7L10 10.9375L13.9375 7L15 8.0625L10 13.0625Z"/></svg>
                </span>
              </button>
            </li>
            
            <li className="elv-g2-topnav__nav-li" role="none">
              <a href="#" className="elv-g2-topnav__link" role="menuitem">AI Agents</a>
            </li>
            
            <li className="elv-g2-topnav__nav-li elv-g2-topnav__nav-li--hoverable elv-show-xxlarge" role="none">
              <button className="elv-g2-topnav__link" role="menuitem" aria-haspopup="true" aria-expanded="false">
                Services
                <span className="elv-g2-topnav__link-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10 13.0625L5 8.0625L6.0625 7L10 10.9375L13.9375 7L15 8.0625L10 13.0625Z"/></svg>
                </span>
              </button>
            </li>
            
            <li className="elv-g2-topnav__nav-li elv-g2-topnav__nav-li--hoverable elv-show-xxlarge" role="none">
              <button className="elv-g2-topnav__link" role="menuitem" aria-haspopup="true" aria-expanded="false">
                For Vendors
                <span className="elv-g2-topnav__link-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10 13.0625L5 8.0625L6.0625 7L10 10.9375L13.9375 7L15 8.0625L10 13.0625Z"/></svg>
                </span>
              </button>
            </li>
            
            <li className="elv-g2-topnav__nav-li elv-show-xxlarge" role="none">
              <a href="#" className="elv-g2-topnav__link" role="menuitem">Deals</a>
            </li>

            <div className="elv-g2-topnav__actions">
              <a href="#" className="elv-g2-topnav__pin-desktop" aria-label="Research Boards">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M15 12L17 14V15.5H12.75V20.25L12 21L11.25 20.25V15.5H7V14L9 12V6.5H8V5H16V6.5H15V12Z"/></svg>
              </a>
              <a href="#" className="elv-g2-btn elv-g2-btn--purple">Leave a Review</a>
              <a href="#" className="elv-g2-btn elv-g2-btn--purple elv-g2-btn--hollow">Join or Log In</a>
            </div>
          </ul>

          <div className="elv-g2-topnav__mobile-utils">
            <button className="elv-g2-topnav__icon-btn" aria-label="Research Boards">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M15 12L17 14V15.5H12.75V20.25L12 21L11.25 20.25V15.5H7V14L9 12V6.5H8V5H16V6.5H15V12Z"/></svg>
            </button>
            <button 
              className={`elv-g2-topnav__icon-btn elv-g2-topnav__hamburger js-mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`} 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 14.5V13H17V14.5H3ZM3 10.75V9.25H17V10.75H3ZM3 7V5.5H17V7H3Z"/></svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`elv-g2-offcanvas-overlay js-mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <aside className={`elv-g2-offcanvas js-mobile-menu ${isMenuOpen ? 'is-open' : ''}`} aria-label="Mobile Navigation">
        <ul className="elv-g2-mobile-menu">
          <li className="elv-g2-mobile-menu__item" style={{ marginTop: '8px' }}>
            <a href="#" className="elv-g2-mobile-menu__link">Home</a>
          </li>
          <li className="elv-g2-mobile-menu__item">
            <a href="#" className="elv-g2-mobile-menu__link">Write a Review</a>
          </li>

          <li className="elv-g2-mobile-menu__header">Browse</li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">
              Top Categories
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7 5L12 10L7 15"/></svg>
            </a>
          </li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">All Categories</a>
          </li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">Software Categories</a>
          </li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">AI Agents</a>
          </li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">Service Categories</a>
          </li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">Compare Software</a>
          </li>
          <li className="elv-g2-mobile-menu__item elv-g2-mobile-menu__indented">
            <a href="#" className="elv-g2-mobile-menu__link">Deals</a>
          </li>

          <li className="elv-g2-mobile-menu__header">My Profile</li>
          <li className="elv-g2-mobile-menu__item">
            <div className="elv-g2-mobile-menu__btn-wrap">
              <a href="#" className="elv-g2-btn elv-g2-btn--purple elv-g2-btn--hollow" style={{ width: '100%' }}>Join or Log In</a>
            </div>
          </li>

          <li className="elv-g2-mobile-menu__header">G2 for Business</li>
        </ul>

        <a href="#" className="elv-g2-mobile-menu__close js-mobile-menu-close" onClick={closeMenu}>Close Menu</a>
      </aside>
    </>
  );
}
