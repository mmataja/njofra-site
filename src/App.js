import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="parallax-image">
          <Header />
        </div>
      
      </div>
    );
  }
}

export default App;
