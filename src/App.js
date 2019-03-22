import React, { Component } from 'react';
import Header from './Components/Header/Header';
// import Welcome from './Components/Welcome/Welcome';
import Main from './Components/Main/Main';
import Work from './Components/Work/Work';
import Inspiration from './Components/Inspiration/Inspiration';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Welcome /> */}
        <Main />
        <Work />
        <Inspiration />
        <Footer />
      </div>
    );
  }
}

export default App;
