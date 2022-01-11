import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from "react-router-dom"
import {IntlProvider} from "react-intl"
import "./i18n"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
