import React, { Component } from 'react';
import './App.css';

// *** Components ***
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import ParallaxImage from './ParallaxImage/ParallaxImage';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';


class App extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
}

  render(){
    return(
      <div className="App">
        <div className="parallax-image">
          <Header />
        </div>
        <div>
          <OurServices />
        </div>
        <div>
          <ParallaxImage />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <ParallaxImage />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    );
  }
};

export default App;
