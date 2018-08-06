import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import './TodoForm.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentDidMount() {
        this.props.search();
    }

    keyHandler(e) {
        //const { add, search, description } = this.props OBS=>Opcional
        if(e.key === 'Enter' ) {
            e.shiftKey ? this.props.search() : this.props.add(this.props.description)
        }
        else if (e.key === 'Escape') {
            this.props.clear();
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">

                <Grid cols="12 9 10">
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa" 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" 
                        onClick={() => this.props.add(this.props.description)}/>
                    <IconButton style="info" icon="search" 
                        onClick={this.props.search}/>
                    <IconButton style="default" icon="close" 
                        onClick={this.props.clear}/>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        description: state.todo.description
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeDescription, search, add, clear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);