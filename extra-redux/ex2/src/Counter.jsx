//Terceiro arquivo criado
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec, stepChanged } from './counterActions';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter.number}</h1>
                <input onChange={this.props.stepChanged} 
                    value={this.props.counter.step} 
                    type="number" />
                <button onClick={this.props.dec}>Dec</button>
                <button onClick={this.props.inc}>Inc</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ inc, dec, stepChanged }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);