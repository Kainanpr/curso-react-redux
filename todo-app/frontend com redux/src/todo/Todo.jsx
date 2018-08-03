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
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    /* Metodo é chamado apenas uma vez após a renderização do componente 
    componentDidMount() {
        this.refresh();
    } 
    */

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '';

        //console.log(`${URL}?sort=-createdAt${search}`);

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}));
    }

    handleSearch() {
        this.refresh(this.state.description);
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
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo) {
        axios.put(URL + "/" + todo._id, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPeding(todo) {
        axios.put(URL + "/" + todo._id, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description));
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="cadastro"></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear} />
                <TodoList 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPeding={this.handleMarkAsPeding}
                    handleRemove={this.handleRemove} />
            </div>
        );
    }
}