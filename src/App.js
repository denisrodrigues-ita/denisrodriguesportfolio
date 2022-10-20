import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Sobre from './Components/Sobre/Sobre';
import Portfolio from './Components/Portfolio/Portfolio';
import Contato from './Components/Contato/Contato';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;