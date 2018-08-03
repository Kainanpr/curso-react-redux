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
    return function(dispatch) {
        axios.post(URL, { description: descri })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data })) //Metodo da promisse
            .then(resp => dispatch(search()))
    }
}