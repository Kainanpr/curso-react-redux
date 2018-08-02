import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/App';
import reducers from './main/reducers';

/* Integrando o WebApp com o plugin Redux DevTools do Google Chrome */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

/* Alem de passar os reducers para a store tem que passar a  
 * referencia para o devtools criado anteriormente */
const store = createStore(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();