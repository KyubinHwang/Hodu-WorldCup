import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />    
      </BrowserRouter>
    </React.StrictMode>
  ,
  document.getElementById('root')
);