import React, {Component} from 'react';
import ProjectItems from "./ProjectItems";

class Projects extends Component {

    deleteProject(id) {
        this.props.onDelete2(id);
    }

    render() {
        let projectItems;
        if (this.props.projectProperties) {
            projectItems = this.props.projectProperties.map(lamdaVariable => {
                return (
                    <ProjectItems key={lamdaVariable.title}
                                  propertyForProjectItems={lamdaVariable} onDelete1={this.deleteProject.bind(this)}/>
                )
            })
        }
        return (
            <div className="Projects_content">
                <h3>Latest Projects</h3>
                {projectItems}
            </div>
        );
    }
}



export default Projects;
