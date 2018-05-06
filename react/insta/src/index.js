import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login/login'
import registerServiceWorker from './registerServiceWorker';

console.log("Hey there");
sessionStorage.setItem("InstaAUTHTOKEN", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjU2ODM5Mjd9.wzcLOyZG3irLItPVNtcXXQp5YYcd6yF1DgWHLWxStI0");
console.log(sessionStorage.getItem("InstaAUTHTOKEN"));
if (sessionStorage.getItem("InstaAUTHTOKEN")!=null)
    ReactDOM.render(<App />, document.getElementById('root'));
 else 
    ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
