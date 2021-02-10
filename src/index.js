import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducers from './reducers';
import App from './components/App'
import './sass/main.scss';


const store = createStore(reducers)

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
  <Route path='/' component={App}/>
  </BrowserRouter>
  </Provider>, document.querySelector('#root') )