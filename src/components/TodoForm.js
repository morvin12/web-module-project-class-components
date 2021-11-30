import React from 'react';

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    handleChange = (e) => {
        this.setState({...this.state, item: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item)
        this.setState({
            ...this.state,
            item: ''
        })
    }

    handleClear = (e) => {
        e.preventDefault();
        this.props.clearComplete();

    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Your Todo's</h2>
                <label>Add Item...
                    <input id='todo-input' type='text' name='item' value={this.state.item} onChange={this.handleChange} />
                </label>
                <button id='add-todo'>Add To Do</button>
                <button id='add-todo' onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;