import React, { Component } from 'react';
import NavDesign from './components/others/Header';
import FooterDesign from './components/others/Footer';
import RoleDesign from './components/others/Role';
import MainDesign from './components/others/Main';
import Jumbotron from './components/others/Jumbotron';

class App extends Component {
  
  
  render() {
    const style = {
      marginTop:20
    };
    
    return (
        <div>
          <NavDesign />
          <MainDesign />
          <Jumbotron />
          <RoleDesign />
          <FooterDesign />
        </div>
        
    );
  }
}

export default App;
