import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Button from './components/button/button';

// Create pages for each route
import Home from './pages/home';
import Contact from './pages/contact';


const routes = [
  {
    path: "/",
    element: (
      <div className="video-background">
        <Navbar />
        <Hero />
        <Button />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    ),
  },
];

// App component 
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
