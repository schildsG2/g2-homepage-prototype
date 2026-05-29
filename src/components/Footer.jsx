import React from 'react';
import { footerColumns } from '../data/footer';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {footerColumns.map((col, index) => (
            <div className="footer-column" key={index}>
              <h3 className="footer-column-title">{col.title}</h3>
              <ul className="footer-link-list">
                {col.links.map((link, linkIndex) => (
                  <li className="footer-link-item" key={linkIndex}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {col.address && (
                <div className="footer-address">
                  <p>{col.address.company}</p>
                  <p>{col.address.street}</p>
                  <p>{col.address.suite}</p>
                  <p>{col.address.cityStateZip}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="footer-sub">
          <p className="footer-copyright">© 2026, G2.com, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
