import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import App from './App';
Axios.defaults.baseURL='http://localhost:4000';
ReactDOM.render(<App />, document.getElementById('root'));
