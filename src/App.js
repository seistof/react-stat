import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Menu from './component/menu/Menu';
import Display from './component/display/Display';
import Header from './component/header/Header';

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
