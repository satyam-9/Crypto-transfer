import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import store from './app/store';   

import './index.css'
import App from './App'

import { TransactionProvider} from './context/TransactionContext';

ReactDOM.render(
  <TransactionProvider> 
    <React.StrictMode>
      <Provider store ={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)
