import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Details from './content';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    <div className='page'>
    <App />
   
    <div className='det'>
    <Details />
    </div>
    </div>
  
    
  </React.StrictMode>
);

reportWebVitals();
