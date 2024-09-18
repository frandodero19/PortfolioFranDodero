import './styles/globals.css';
import './styles/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './portfolio'; // Importa el archivo con nombre en minúsculas

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);
