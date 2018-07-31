import React from 'react';
import IconButton from '../template/IconButton';
import './TodoList.css';

export default class TodoList extends React.Component {

    renderRows() {
        const list = this.props.list;

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done} 
                        onClick={() => this.props.handleMarkAsDone(todo)} />
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => this.props.handleMarkAsPeding(todo)} />
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => this.props.handleRemove(todo)}
                    />
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

TodoList.defaultProps = {
    list: []
};