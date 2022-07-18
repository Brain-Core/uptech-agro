import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';

import { Provider} from 'react-redux'
import { store } from './app/store';
import axios from 'axios';

axios.defaults.baseURL = "https://uptech-agro.herokuapp.com/api";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


