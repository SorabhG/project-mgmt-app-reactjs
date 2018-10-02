import React, {Component} from 'react';
import TodoItems from "./TodoItems";

class Todos extends Component {



    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(lamdaVariable => {
                return (
                    <TodoItems  key={lamdaVariable.title} propertyForTodoItems={lamdaVariable}/>
                )
            })
        }
        return (
            <div className="Todos_content">
                <h3>Latest Todos</h3>
                {todoItems}
            </div>
        );
    }
}



export default Todos;
