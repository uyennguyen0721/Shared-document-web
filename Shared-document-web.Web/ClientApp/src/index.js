import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')
const alertOptions = {
    timeout: 2000,
    position: 'middle',
    transition: transitions.SCALE,
    offset: '30px',
};
ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter basename={baseUrl}>
          <App />
         </BrowserRouter>
        </AlertProvider>
  </Provider>,
  rootElement)

  registerServiceWorker()