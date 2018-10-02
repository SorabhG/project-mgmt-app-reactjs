import React, {Component} from 'react';

class ProjectItems extends Component {
    deleteProject(id){
        this.props.onDelete1(id);
    }

    render() {
        return (
            <li className="OptionalProjectItems">
                <strong>{this.props.propertyForProjectItems.id} </strong>- {this.props.propertyForProjectItems.category}
                <a href="#" onClick={this.deleteProject.bind(this,this.props.propertyForProjectItems.id)}>X</a>

            </li>
        );
    }
}

export default ProjectItems;
