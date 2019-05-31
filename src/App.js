import React, { Component } from 'react';
import './App.css';

// *** Components ***
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import ParallaxImage from './ParallaxImage/ParallaxImage';


class App extends Component {
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
      </div>
    );
  }
};

export default App;
