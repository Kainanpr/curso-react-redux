import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

/* Metodo createStore: Cria uma store que é o estado unico da aplicação.
 * É um objeto com varios atributos e cada atributo é controlado por um Reducer */

/* Metodo combineReducers: Compina todos os reducers (Reducers sao funções puras)
 * e no final gera um objeto que sera o Store */

/* OBS: As mudanças no estado sao feitas apartir de funcoes puras, 
 * recebe o estado original, a ação e encima desses dois 
 * dados gera uma versao atualizada do estado */
import { combineReducers, createStore } from 'redux';

/* Componente: Pega o estado e consegue passar 
 * o estado para os componentes filhos */
import { Provider } from 'react-redux';

/* Importa componente React */
import Field from './Field';

/* Importando  */
import fieldReducer from './fieldReducer';

/* Como estou combinando funções, o resultado dos atributos devem ser uma função */
const reducers = combineReducers({
    field: fieldReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
