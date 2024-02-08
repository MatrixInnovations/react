import React, { Component } from 'react';
import './App.css';

// Import page components
import HomePage from './pages/HomePage';
import PersonalizedProgramPage from './pages/PersonalizedProgramPage';
import CoachingPage from './pages/CoachingPage';
import ContactPage from './pages/ContactPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home' // Initial route is set to 'home'
    };
  }

  onRouteChange = (route) => {
    this.setState({ route });
  }

  render() {
    const { route } = this.state;

    // Render different components based on the current route
    let componentToRender;
    switch (route) {
      case 'home':
        componentToRender = <HomePage />;
        break;
      case 'personalizedProgram':
        componentToRender = <PersonalizedProgramPage />;
        break;
      case 'coaching':
        componentToRender = <CoachingPage />;
        break;
      case 'contact':
        componentToRender = <ContactPage />;
        break;
      default:
        componentToRender = <HomePage />;
    }

    return (
      <div>
        {/* Navbar with menu items */}
        <nav>
          <ul>
            <li onClick={() => this.onRouteChange('home')}>Home</li>
            <li onClick={() => this.onRouteChange('personalizedProgram')}>Personalized Program</li>
            <li onClick={() => this.onRouteChange('coaching')}>1-1 Coaching</li>
            <li onClick={() => this.onRouteChange('contact')}>Contact</li>
          </ul>
        </nav>
        
        {/* Render the selected component */}
        {componentToRender}
      </div>
    );
  }
}

export default App;