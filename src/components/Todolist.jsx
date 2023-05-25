import React, { Component } from 'react';

export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            newTodo: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTodoDelete = this.handleTodoDelete.bind(this);
    }

    handleInputChange(event) {
        this.setState({ newTodo: event.target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const { newTodo, todos } = this.state;
        if (newTodo.trim()) {
            this.setState({
                todos: [...todos, newTodo],
                newTodo: '',
            });
        }
    }

    handleTodoDelete(index) {
        const { todos } = this.state;
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos, newTodo } = this.state;

        return (
            <div className='bg-dark text-light'>
                <h1>Todo List</h1>
                <form className='text-center' onSubmit={this.handleFormSubmit}>
                    <input type="text" className='p-1 m-2' placeholder='Enter Your Task Here' value={newTodo} onChange={this.handleInputChange} />
                    <button className='btn btn-warning' type="submit">Add</button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button className='btn btn-danger p-2 m-2' onClick={() => this.handleTodoDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
