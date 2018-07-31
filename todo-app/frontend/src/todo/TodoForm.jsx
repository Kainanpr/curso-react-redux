import React from 'react';
import Grid from '../template/Grid';

export default class TodoForm extends React.Component {
    render() {
        return (
            <div role="form" className="todoForm">

                <Grid cols="12 9 10">
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa" />
                </Grid>

                <Grid cols="12 3 2">
                    <button className="btn btn-primary">
                        <i className="fa fa-plus"></i>
                    </button>
                </Grid>
            </div>
        );
    }
}