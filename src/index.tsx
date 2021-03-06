import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configurationStore from "./redux/index";

import App from './App';
import 'antd/dist/antd.css';
import '../src/styles/index.scss';

const store = configurationStore;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

