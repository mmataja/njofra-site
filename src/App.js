import React, { Component } from 'react';
import './App.css';

// *** libraries ***
// import { Link, animateScroll as scroll } from 'react-scroll';

// *** Components ***
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import ParallaxImage from './ParallaxImage/ParallaxImage';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


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
        <div id="services">
          <OurServices />
        </div>
        <div>
          <ParallaxImage />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div>
          <ParallaxImage />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default App;
