import React from 'react';
import './navbar.css';



const Navbar = ({ onRouteChange }) => {
  return (
    <section style={{ background: '#e74c3c', color: '#fff' }}>
      <nav className="stroke">
        <ul>
          <li onClick={() => onRouteChange('/')}>Home</li>
          <li onClick={() => onRouteChange('/personalized-program')}>Personalized Program</li>
          <li onClick={() => onRouteChange('/1-1-coaching')}>1-1 Coaching</li>
          <li onClick={() => onRouteChange('/contact')}>Contact</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
