import React from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = "http://localhost:3003/api/todos";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    /* Metodo é chamado apenas uma vez após a renderização do componente */
    componentDidMount() {
        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}));
    }

    handleChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh());
    }

    handleRemove(todo) {
        axios.delete(URL + "/" + todo._id)
            .then(resp => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        );
    }
}