import React, { Component } from 'react';
import NavBar from './components/NavCarrot';
import NavDesign from './components/others/Header';
import Jumbotron from './components/Jumbotron';
import FooterDesign from './components/others/Footer';
import RoleDesign from './components/others/Role';
import MainDesign from './components/others/Main';
import axios from 'axios';

class App extends Component {
  
  
  render() {
    const style = {
      marginTop:20
    };
    
    return (
        <div>
          <NavDesign />
          <MainDesign />
          <RoleDesign />

          <FooterDesign />
        </div>
        
    );
  }
}

export default App;
