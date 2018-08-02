const INITIAL_STATE = { value: 'Opa' };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            /* OBS: Caso fosse alterar o estado atual 
             * state.value = action.payload */
            return { value: action.payload };
        default:
            return state; 
    }
}