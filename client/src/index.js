import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {Provider} from 'redux'
import {BrowserRouter} from 'react-router-dom'

const app =
              <BrowserRouter>
                <App/>
              </BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();