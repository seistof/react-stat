import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Display from './components/display/Display';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className={'center'}>
        <Menu/>
        <Display/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
