import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store.js'
import reportWebVitals from './reportWebVitals';
import dotenv from "dotenv";
import axios from 'axios';
dotenv.config();

axios.defaults.baseURL ="https://foodssg.herokuapp.com"; // process.env.REACT_APP_API ||
// axios.defaults.baseURL ="http://localhost:3001"; // process.env.REACT_APP_API ||

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
