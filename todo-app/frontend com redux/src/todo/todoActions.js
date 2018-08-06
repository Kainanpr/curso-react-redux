/* Import responsavel por fazer as requisicoes HTTP */
import axios from 'axios';

/* URL padrao da API */
const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (descri) => {
    /*Dispatch dispara a sua actions para todos os reducers 
     * (Nesse caso vc esta retornando um metodo que tem como parametro um dispatch)*/
    return function(dispatch) {
        axios.post(URL, { description: descri })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data })) //Metodo da promisse
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(URL + "/" + todo._id, { ...todo, done: true })
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(URL + "/" + todo._id, { ...todo, done: false })
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(URL + "/" + todo._id)
            .then(resp => dispatch(search()))
    }
}