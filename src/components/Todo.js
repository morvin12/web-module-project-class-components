import React from "react";
import './Todo.css'


class Todo extends React.Component{
    handleClick = () => {
        this.props.handleToggle(this.props.item);
    }
    render() {
        return (
            <div>
                <h4 onClick={this.handleClick} className={this.props.item.complete ? `complete` : ''}>{this.props.item.name}</h4>
            </div>
        )
    }
}

export default Todo;
