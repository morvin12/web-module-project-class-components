// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render (){
        return (
            <div>
                <h2>To Do List</h2>
                {this.props.todos.map(item => (
                    <Todo handleToggle={this.props.handleToggle} item={item} key={item.id}/>
                ))}
                <hr/>
            </div>
        )
    }

}

export default TodoList;