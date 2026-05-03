import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Arquivos globais de estilo.
// global.css: reset, body, telas principais.
// theme.css: aparência do jogo, botões, cards, menu, alertas.
// animations.css: animações simples.
import './styles/global.css';
import './styles/theme.css';
import './styles/animations.css';

// Ponto de entrada do React.
// Ele renderiza o componente App dentro da div #root do index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);