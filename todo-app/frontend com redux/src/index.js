import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';

/* Serve para dentro um de action creator retornar um array com varias actions */
import multi from 'redux-multi';

/* thunk não retorna mais uma action e sim um metodo, esse metodo recebe o dispatch */
import thunk from 'redux-thunk';

import App from './main/App';
import reducers from './main/reducers';

/* Integrando o WebApp com o plugin Redux DevTools do Google Chrome */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();