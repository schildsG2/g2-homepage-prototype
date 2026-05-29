import React, { useState, useEffect } from 'react';
import '../styles/g2-topbar.css';

export default function G2Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="elv-g2-topnav elv-g2-topnav--homepage">
        <div className="elv-g2-topnav__inner">
          <div className="elv-g2-topnav__item elv-g2-topnav__item--logo">
            <a href="#" className="elv-g2-topnav__logo" aria-label="G2 - Business Software Reviews">
              <img src={`${import.meta.env.BASE_URL}images/g2-logo-rorange.svg`} alt="" />
            </a>
          </div>

          <div className="elv-g2-topnav__spacer"></div>

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
