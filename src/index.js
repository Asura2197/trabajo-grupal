import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Pantalla5 from './components/Pantalla5';
import Pantalla10 from './components/Pantalla10';
import Pantalla11 from './components/Pantalla11';
import Registro from './components/Registro';
import MainPage from './components/MainPage';
import Carrito from './components/Carrito';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pantalla5/> } />
        <Route path='/main' element={ <Pantalla10 /> } />
        <Route path='/main2' element={ <Pantalla11 /> } />
        <Route path='/Carrito' element={ <Carrito /> } />
        <Route path='/MainPage' element={ <MainPage /> } />
        <Route path='/Registro' element={ <Registro /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
