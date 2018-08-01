import React, { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        )
    }
}

//Mapeia os state para os props do componente
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

//Padrao de projeto decorator. 
export default connect(mapStateToProps)(Field);

