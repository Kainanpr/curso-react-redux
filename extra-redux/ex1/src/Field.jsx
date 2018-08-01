import React, { Component } from 'react';

/* Integracao do react com o redux */ 
import { connect } from 'react-redux';

//Liga as acoes criadas com o dispatch
import { bindActionCreators } from 'redux';

//Importando o metodo changeValue para uma acao creator
import { changeValue } from './fieldActions';

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

//Mapeia os state(states vem da store) para os props do componente
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

//Pegar os actions creators e mapeia no props do componente
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch);
}

/* Padrao de projeto decorator. 
 * Passando um componente Field e retornando esse mesmo
 * componente decorado e com suas propriedades mapeada pelo store*/
export default connect(mapStateToProps, mapDispatchToProps)(Field);

