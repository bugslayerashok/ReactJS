import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
const myelement = <h1>I {5+5} Love JSX!</h1>;
const ele = React.createElement("h1",{},"Hello in h1");
const bigcode = (
  <><h1>Hello</h1>
  
  <p>lo</p>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(bigcode);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
