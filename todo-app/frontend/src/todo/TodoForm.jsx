import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import './TodoForm.css';

export default class TodoForm extends React.Component {
    render() {
        return (
            <div role="form" className="todoForm">

                <Grid cols="12 9 10">
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa" 
                        onChange={this.props.handleChange}
                        value={this.props.description} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" 
                        onClick={this.props.handleAdd}/>
                    <IconButton style="info" icon="search" 
                        onClick={this.props.handleSearch}/>
                    <IconButton style="default" icon="close" 
                        onClick={this.props.handleClear}/>
                </Grid>
            </div>
        );
    }
}