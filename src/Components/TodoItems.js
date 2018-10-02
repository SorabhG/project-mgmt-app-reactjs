import React, {Component} from 'react';

class TodoItems extends Component {


    render() {
        return (
            <div >
            <li className="OptionalTodoItems">
                <strong>{this.props.propertyForTodoItems.id} </strong>- {this.props.propertyForTodoItems.title}
            </li>
            </div>
        );
    }
}

export default TodoItems;
