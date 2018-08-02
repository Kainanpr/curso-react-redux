import React from 'react';

/* Componente poderia ser criado em outra pasta chamada helpers. 
 * Não foi por motivos didáticos    
 */
export default class If extends React.Component {

    render() {
        if(this.props.test) {
            return this.props.children
        }
        else {
            return false;
        }
    }
}