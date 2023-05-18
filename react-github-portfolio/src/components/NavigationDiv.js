import React from "react";
import "./styles/styles.css"

function NavigationDiv({ currentPage, handlePageChange }) {
    return (
        <div className="banner">
          <nav className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange('AboutMe')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'AboutME' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </nav>
          <nav className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </nav>
          <nav className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </nav>
          <nav className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </nav>
        </div>
    );
}
export default NavigationDiv;