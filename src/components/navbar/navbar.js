import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <section style={{ background: '#e74c3c', color: '#fff' }}>
      <nav className="stroke">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/personalized-program">Personalized Program</Link></li>
          <li><Link to="/1-1-coaching">1-1 Coaching</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
