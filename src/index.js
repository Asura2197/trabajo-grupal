import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Pantalla5 from './components/Pantalla5';
import Pantalla10 from './components/Pantalla10';
import Pantalla11 from './components/Pantalla11';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Routes>
        <Route path='https://Asura2197.github.io/trabajo-grupal' element={ <Pantalla11 /> } />
      </Routes>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
