import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import createGlobalStyle from './styles/global';


const GlobalStyle = createGlobalStyle;

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

