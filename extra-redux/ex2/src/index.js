import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';
import Counter from './Counter';

const reducers = combineReducers({
    counter: counterReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
