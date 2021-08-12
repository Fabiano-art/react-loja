import './App.css';

import React from 'react';
import './assets/js/index'

import Carousel  from './Components/Templates/Carousel/Carousel';
import Footer from './Components/Templates/Footer/Footer';
import Header from './Components/Templates/Header/Header';
import Location from './Components/Templates/Location/Location'
// import Logo from './Components/Templates/Logo/Logo'
import Nav from './Components/Templates/Nav/Nav'
import Section from './Components/Templates/Product-section/Section'

function App() {
  return (
    <div className="app">
      <Carousel />
      <Footer />
      <Header />
      <Location />
      <Nav />
      <Section />
    </div>
    
  );
}

export default App;
