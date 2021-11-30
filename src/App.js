import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todoArr = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoArr
    }
  }

  handleToggle = (item) => {
    this.setState (
      {
        ...this.state, 
        todos: this.state.todos.map(todo => {
          if (todo.id === item.id){
            return {
              ...todo,
              complete: !todo.complete
            }
          }
          return todo;
        })

      }
    )
  }

  addItem = (item) => {
    const newItem = {name: item, id: Date.now(), complete: false};
    this.setState (
      {
        ...this.state,
        todos: [...this.state.todos, newItem]
      }
    )
  }

  clearComplete = () => {
    const updatedList = this.state.todos.filter(todo => {
      return todo.complete === false
    })
    
    this.setState(
      {
        ...this.state,
        todos: updatedList
      }
    )
  } 

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <hr/>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
        <TodoForm addItem={this.addItem} clearComplete={this.clearComplete}/>
      </div>
    );
  }
}

export default App;
