import React from 'react';
import Hero from '../components/hero/hero';
import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';


const Home = () => {
  return (
    <div>
      <Hero />
      <Button />
      <Navbar />

      {/* Other content for your home page */}
    </div>
  );
};

export default Home;